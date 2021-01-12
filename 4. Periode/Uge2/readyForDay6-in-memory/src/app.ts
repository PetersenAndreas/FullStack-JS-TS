require('dotenv').config();
import express from "express";
import path from "path";
import { ApiError } from "./errors/apiError";
import cors from 'cors';


//Add if needed
//import { requestLogger, errorLogger } from "./middlewares/logger";


const app = express();
app.use(cors())

app.use(express.static(path.join(process.cwd(), "public")))

//  Add if needed
//app.use(requestLogger)


app.use(express.json())

//const userAPIRouter = require('./routes/userApi');
const userAPIRouter = require('./routes/userApiDB');
const graphQLRouter = require('./routes/graphQLAPI');

app.get("/api/dummy", (req, res) => {
  res.json({ msg: "Hello" })
})

app.use("/api/users", userAPIRouter);
app.use("/graphql", graphQLRouter)

//  Add if needed
// app.use(errorLogger)

//404 handler
app.use(function (req, res, next) {
  if (req.originalUrl.startsWith("/api")) {
    res.status(404).json({ code: 404, msg: "this API does not contanin this endpoint" })
  }
  next()
})

app.use(function (err: any, req: any, res: any, next: Function) {
  if (err instanceof (ApiError)) {
    const e = <ApiError>err;
    return res.status(e.errorCode).send({ code: e.errorCode, message: e.message })
  }
  next(err)
})

//Server is now started in bin/www.js
export default app


