import path from "path";
require('dotenv').config({ path: path.join(process.cwd(), '.env') })
import { expect } from "chai";
import { Server } from "http";
import fetch from "node-fetch";
import { bryptAsync } from "../src/utils/bcrypt-async-helper"
import UserFacade from '../src/facades/user';


let server: Server;
const TEST_PORT = "7777"

describe("Create/Update Comments", () => {
  let URL: string;
  before(async () => {
    process.env["PORT"] = TEST_PORT;
    process.env["SKIP_AUTHENTICATION"] = "1";
    server = await require("../src/app").server;
    URL = `http://localhost:${process.env.PORT}`;
  })


  beforeEach(async () => {
    const hash: string = await bryptAsync("secret");

    UserFacade.users = [
      { name: "Peter Pan", userName: "pp@b.dk", password: hash, role: "user" },
      { name: "Donald Duck", userName: "dd@b.dk", password: hash, role: "user" },
      { name: "admin", userName: "admin@a.dk", password: hash, role: "admin" }
    ]
  })



  after(async () => {
    server.close();
  })

  it("Should get the message Hello", async () => {
    const result = await fetch(`${URL}/api/dummy`).then(r => r.json());
    expect(result.msg).to.be.equal("Hello")
  })

  xit("Should get three users", async () => {

  })
  it("Should Add the user Jan", async () => {
    const newUser = { name: "Jan Olsen", userName: "jo@b.dk", password: "secret", role: "user" }
    const config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    }
    const result = await fetch(`${URL}/api/users`, config).then(r => r.json());
    expect(result.status).to.be.equal("User was added")
  })

  xit("Should find the user Donald Duck", async () => {

  })

  xit("Should not find the user xxx@b.dk", async () => {

  })

  xit("Should Remove the user Donald Duck", async () => {
  })


})
