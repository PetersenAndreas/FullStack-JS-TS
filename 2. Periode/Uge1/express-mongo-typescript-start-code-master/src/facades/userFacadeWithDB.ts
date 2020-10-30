const path = require('path')
require('dotenv').config({ path: path.join(process.cwd(), '.env') })
const debug = require("debug")("facade-with-db");
import IGameUser from '../interfaces/GameUser';
import { bcryptAsync, bcryptCheckAsync } from "../utils/bcrypt-async-helper"
import * as mongo from "mongodb"
import { getConnectedClient } from "../config/setupDB"
import { ApiError } from "../errors/apiError"



let userCollection: mongo.Collection;

export default class UserFacade {

  static async initDB(client: mongo.MongoClient) {

    const dbName = process.env.DB_NAME;
    //debug(`Database ${dbName} about to be setup: ${client}`)
    if (!dbName) {
      throw new Error("Database name not provided")
    }
    try {
      userCollection = await client.db(dbName).collection("users");
      debug(`userCollection initialized on database '${dbName}'`)

    } catch (err) {
      console.error("Could not create connection", err)
    }
  }

  static async addUser(user: IGameUser): Promise<string> {
    const hash = await bcryptAsync(user.password);
    let newUser = { ...user, password: hash }
    const result = await userCollection.insertOne(newUser);
    return "User was added";
  }

  static async deleteUser(userName: string): Promise<string> {
    let result = await userCollection.deleteOne(
      { "userName": userName } // specifies the document to delete
      )
      return 'User "' + userName + '" was deleted';
  }
  //static async getAllUsers(): Promise<Array<IGameUser>> {
  static async getAllUsers(proj?: object): Promise<Array<any>> {
    const users = await userCollection.find({}, { projection: proj }).toArray()

    return users;
  }

  static async getUser(userName: string, proj?: object): Promise<any> {
    const user = await userCollection.findOne({ userName });
    if(user == undefined) {
      throw new ApiError("User Not Found", 404);
    }
    return user;
  }

  static async checkUser(userName: string, password: string): Promise<boolean> {
    let userPassword = "";
    console.log("Checking")
    let user;

    user = await UserFacade.getUser(userName);

    if(user == undefined) {
      throw new ApiError("User Not Found", 404);
    }
    
    console.log("Found ", user)
    userPassword = user.password;
    const status = await bcryptCheckAsync(password, userPassword);
    return status
  }
}

async function test() {
  const client = await getConnectedClient();
  await UserFacade.initDB(client);

  await userCollection.deleteMany({})
  await UserFacade.addUser({ name: "kim-admin", userName: "kim@b.dk", password: "secret", role: "admin" })
  await UserFacade.addUser({ name: "ole", userName: "ole@b.dk", password: "secret", role: "user" })

  const all = await UserFacade.getAllUsers();
  debug(all)
  debug(all.length)

  //client.close();
  // const projection = {projection:{_id:0, role:0,password:0}}
  // const kim = await UserFacade.getUser("kim@b.dk",projection)
  // debug(kim)

  // try {
  //     let status = await UserFacade.deleteUser("kim@b.dk");
  //     debug(status)
  //     status = await UserFacade.deleteUser("xxxx@b.dk");
  //     debug("Should not get here")
  // } catch (err) {
  //     debug(err.message)
  // }

  // try {
  //     const passwordStatus = await UserFacade.checkUser("kim@b.dk", "secret");
  //     debug("Expects true: ", passwordStatus)
  // } catch (err) {
  //     debug("Should not get here 1", err)
  // }
  // try {
  //     const passwordStatus = await UserFacade.checkUser("kim@b.dk", "xxxx");
  //     debug("Should not get here ", passwordStatus)
  // } catch (err) {
  //     debug("Should get here with failded 2", err)
  // }
  // try {
  //     const passwordStatus = await UserFacade.checkUser("xxxx@b.dk", "secret");
  //     debug("Should not get here")
  // } catch (err) {
  //     debug("hould get here with failded 2", err)
  // }


}
test();
