import * as mongo from "mongodb"
const MongoClient = mongo.MongoClient;
import { getConnectedClient, closeConnection } from "../src/config/setupDB"
const debug = require("debug")("facade-with-db:test");
import UserFacade from '../src/facades/userFacadeWithDB';
import { expect } from "chai";
import { bcryptAsync } from "../src/utils/bcrypt-async-helper"
import { ApiError } from '../src/errors/apiError';

let userCollection: mongo.Collection | null;
let client: mongo.MongoClient;

describe("Verify the UserFacade with a DataBase", () => {

  before(async function () {
    //Change mocha's default timeout, since we are using a "slow" remote database for testing
    this.timeout(Number(process.env["MOCHA_TIMEOUT"]));
    client = await getConnectedClient();
    process.env["DB_NAME"] = "semester_case_test"
    await UserFacade.initDB(client)
    userCollection = await client.db(process.env["DB_NAME"]).collection("users");
  })

  after(async () => {
    //await closeConnection();
  })

  beforeEach(async () => {

    if (userCollection === null) {
      throw new Error("userCollection not set")
    }
    await userCollection.deleteMany({})
    const secretHashed = await bcryptAsync("secret");
    await userCollection.insertMany([
      { name: "Peter Pan", userName: "pp@b.dk", password: secretHashed, role: "user" },
      { name: "Donald Duck", userName: "dd@b.dk", password: secretHashed, role: "user" },
      { name: "admin", userName: "admin@a.dk", password: secretHashed, role: "admin" }
    ])
  })


  it("Should Add the user Kurt", async () => {
    const newUser = { name: "Jan Olsen", userName: "jo@b.dk", password: "secret", role: "user" }
    try {
      const status = await UserFacade.addUser(newUser);
      expect(status).to.be.equal("User was added")

      if (userCollection === null) {
        throw new Error("Collection was null")
      }
      const jan = await userCollection.findOne({ userName: "jo@b.dk" })
      expect(jan.name).to.be.equal("Jan Olsen")
    } catch (err) {
    } finally { }
  })

  it("Should remove the user Peter", async () => {
    let deleteUser = await UserFacade.deleteUser("pp@b.dk")
    expect(deleteUser).to.be.equal('User "pp@b.dk" was deleted')

  })

  it("Should get three users", async () => {
    const all = await UserFacade.getAllUsers();  
    expect(all[0].name).to.be.equal("Peter Pan");
    expect(all[1].name).to.be.equal("Donald Duck");
    expect(all[2].name).to.be.equal("admin");
    expect(all.length).to.be.equal(3);

  })

  it("Should find Donald Duck", async () => {
    const findUser = await UserFacade.getUser("dd@b.dk");
    expect(findUser.name).to.be.equal("Donald Duck");

  })

  it("Should not find xxx.@.b.dk", async () => {
    try {
      const user = await UserFacade.getUser("xxx.@.b.dk");
    } catch (err) {
      expect(err instanceof ApiError).to.be.equal(true)
      expect(err.message).to.be.equal("User Not Found")
    }
    finally { }
  })

  it("Should correctly validate Peter Pan's credential's", async () => {
    const user = await UserFacade.checkUser("pp@b.dk","secret");
    expect(user).to.be.true;
  })
  
  it("Should NOT correctly validate Peter Pan's check", async () => {
    try {
      const passwordStatus = await UserFacade.checkUser("pp@b.dk", "xxxx");
    } catch (err) {
      expect(err).to.be.false
    }
  })
  
  it("Should NOT correctly validate non-existing users check", async () => {
    try {
      const passwordStatus = await UserFacade.checkUser("pxxxx@b.dk", "secret");
    } catch (err) {
      expect(err instanceof ApiError).to.be.equal(true)
      expect(err.message).to.be.equal("User Not Found")
    }
  })

})