//import bcryptjs from 'bcryptjs';
const debug = require("debug")("game-case")
//const bcryptjs = require('bcryptjs');
import {ApiError} from "../errors/apiError"
import {bcryptAsync,bcryptCheckAsync} from "../utils/bcrypt-async-helper"
import IGameUser from '../interfaces/GameUser';

//interface IGameUser { name: string, userName: string, password: string, role: string }
//const users: Array<IGameUser> = [];

function dummyReturnPromise<T>(val: T | null, err: string="Unknown Error",code:number=500): Promise<T> {
    return new Promise<T>((resolve, reject) => {
        setTimeout(() => {
            if (!val) { reject(new ApiError(err,code) )}
            else resolve(val);
        }, 0);
    })
}

export default class UserFacade {  

    public static users:Array<IGameUser> = [
        //password is "secret"
        { name: "TheUser", userName: "the@user.dk", password: "$2a$10$mA9ozV/maLFQYdursFEenuDcDtOT6bFt0sMm1HuciuxvbVqwqeEl6", role: "user" },
        { name: "TheAdmin", userName: "the@admin.dk", password: "$2a$10$mA9ozV/maLFQYdursFEenuDcDtOT6bFt0sMm1HuciuxvbVqwqeEl6", role: "admin" }
     ];
     
     

    static async addUser(user: IGameUser): Promise<string> {
    /*Info: Import bcryptjs and (npm install bcryptjs) and hash before you store */
    try {
        //const salt = bcryptjs.genSalt(10);
        const hashPw = await bcryptAsync(user.password);
        user.password = hashPw;
        UserFacade.users.push(user);
        return dummyReturnPromise<string>("User was added");
    } catch(err) {
        debug(err)
        throw new Error("Error while adding an user");
    }
}
    static async deleteUser(userName: string): Promise<string> {
    const userDelete = UserFacade.users.find(user => user.userName === userName);
    if (!userDelete) { 
        throw new Error(`User ${userName} was not found.`);
    }
    const index = UserFacade.users.indexOf(userDelete);
    UserFacade.users.splice(index, 1);
    return dummyReturnPromise<string>("User was deleted");
}
    static async getAllUsers(): Promise<Array<IGameUser>> { 
        //console.log(UserFacade.users)
    try {
        return dummyReturnPromise<Array<IGameUser>>(UserFacade.users);
    } catch(err) {
        debug(err)
        throw new Error("Error")
    }
}
    static async getUser(userName: string): Promise<IGameUser> { 
    /*try{
        const userIndex = users.findIndex((user) => user.userName == userName);
        let user = users[userIndex];
        return user;
    } catch(err) {
        debug(err)
        throw new Error("Error while finding user");
    }*/
    
    const userFound = UserFacade.users.find((user) => user.userName == userName);
    
    if(userFound == undefined) {
        return dummyReturnPromise<IGameUser>(null, "User Not Found", 404);
    }
    return dummyReturnPromise<IGameUser>(userFound)

}
    static async checkUser(userName: string, password: string): Promise<boolean> {
    /*Use bcrypjs's compare method */
    try {
        let userCheck = await this.getUser(userName);
        return bcryptCheckAsync(password, userCheck.password);
    } catch(err) {
        debug(err)
        throw new Error("Error while checking user")
    }
    
  }
  
}
//export {UserFacade};