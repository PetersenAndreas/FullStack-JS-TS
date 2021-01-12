require('dotenv').config();
import { debug } from "console";
import express from "express";
import path from "path";
//import { UserFacade } from './facades/userFacades';
//import UserFacade from './facades/userFacades';
//import userApiDB from './routes/userApiDB';
//import loggerSimple from './middleware/simpleLogger'
//import myCors from './middleware/my-cors'
const cors = require('cors');
import {logger, errorLog} from './middleware/logger'
import {endpointError, errorFormat} from './middleware/errorHandling'
const app = express();
app.use(express.static('public'));
app.use(express.json())
app.use(logger);
//app.use(loggerSimple);
//app.use(myCors);
app.use(cors());




app.get("/api/dummy", async (req, res) => {
  res.json({ msg: "Hello" })
})

let userAPIRouter = require('./routes/gameAPI');
//let userAPIRouter2 = require('./routes/userAPI');
app.use("/api/gameapi",userAPIRouter);
let userAPIRouter2 = require('./routes/userApiDB');
app.use("/api/users",userAPIRouter2);
const graphQLRouter = require('./routes/graphQLAPI');
app.use("/graphql", graphQLRouter)

app.use(endpointError)
app.use(errorFormat)


app.use(errorLog);

const PORT = process.env.PORT || 3333;
const server = app.listen(PORT)
debug(`Server started, listening on port: ${PORT}`)
module.exports.server = server;

export default app

/*
Selv skrevet kode:


app.get('/api/users/:userName', async (req, res) => {
  res.send(await UserFacade.getUser(req.params.userName));
})

app.get('/api/users', async (req, res) => {
  res.send(await UserFacade.getAllUsers());
})

app.post('/api/users', async (req, res) => {
  debug(req.body);
  const {name, userName, password, role} = req.body;
  const user = {
    name: name,
    userName: userName,
    password: password,
    role: role
  }
  const newUser = await UserFacade.addUser(user)
  
  res.send(newUser)
})

app.delete('/api/users/:userName', async (req, res) => {
  let userDelete = req.params.userName;
  await UserFacade.deleteUser(userDelete);
  res.send(`${userDelete} has been removed`)
})

app.get("/api/dummies", (req, res) => {
  let users = [{
    name: "Jens",
    userName: "jens123",
    password: "pw123",
    role: "Tank"
  }, {
    name: "Kim",
    userName: "kim123",
    password: "pw456",
    role: "Heavy"
  }]
  users.forEach(user => UserFacade.addUser(user));
  res.send("Kampvogn done");
})

app.use(endpointError)
app.use(errorFormat)


app.use(errorLog);

const PORT = process.env.PORT || 3333;
const server = app.listen(PORT)
debug(`Server started, listening on port: ${PORT}`)
module.exports.server = server;
*/





