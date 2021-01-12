import express, { json } from "express";
import userFacade from "../facades/userFacadeWithDB";
import basicAuth from "../middleware/basic-auth"
const debug = require("debug")("user-endpoint");
const router = express.Router();
import { ApiError } from "../errors/apiError"
import authMiddleware from "../middleware/basic-auth";
import app from "../app";
import { getConnectedClient } from "../config/setupDB";
const { graphqlHTTP } = require('express-graphql');
import { buildSchema, SchemaMetaFieldDef } from "graphql";
import GameUser from "../interfaces/GameUser"
const USE_AUTHENTICATION = !process.env["SKIP_AUTHENTICATION"];


let dbInitialized = false;
(async function initDb() {
    const client = await getConnectedClient();
    await userFacade.initDB(client);
    dbInitialized = true;
})(); //The () means that it is selfinvoking it is instead of writing initDB() on the next line.

router.use((req, res, next) => {
    if (dbInitialized) {
        return next();
    }
    return res.json({ "info": "DB not ready, try again" });

});

const schema = buildSchema(`
  type User {
    name: String
    userName: String
    role: String
  }

  input UserInput {
    name: String
    userName: String!
    password: String!
  }

  type Query {
    users: [User]!
    user(userName: String!): User 
  }

  type Mutation {
    createUser(input: UserInput): User 
  }

`)

var root = {
    users: async () => {
      const users = await userFacade.getAllUsers();
      const usersDTO = users.map((user) => {
        const { name, userName, role } = user;
        return { name, userName, role }
      })
      return usersDTO;
    },
    user: async ({userName}: any) => {
      const {name, role} = await userFacade.getUser(userName);
      return {name, role, userName};
    },
    createUser: async (inp: any) => {
      const { input } = inp;
      try {
        const newUser: GameUser = {
          name: input.name,
          userName: input.userName,
          password: input.password,
          role: "user"
        }
        const status = await userFacade.addUser(newUser)
        return status;
   
      } catch (err) {
        throw err;
      }
    }
}
  
if (USE_AUTHENTICATION) {
  router.use(authMiddleware)
}
 
router.use("/", (req: any, res, next) => {
  if (USE_AUTHENTICATION) {
    if (!req.userName) {
      throw new ApiError("Not Authorized", 403)
    }
  }
  next();
})



router.use('/', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));


module.exports = router;