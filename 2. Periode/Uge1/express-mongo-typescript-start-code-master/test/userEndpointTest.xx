import path from "path";
require('dotenv').config({ path: path.join(process.cwd(), '.env') })
import { expect } from "chai";
import { Server } from "http";
import fetch from "node-fetch";
import { bcryptAsync } from "../src/utils/bcrypt-async-helper"
import UserFacade from '../src/facades/userFacades';


let server: Server;
const TEST_PORT = "7777"

describe("Create/Update Comments", function() {
  let URL: string;
  before(async () => {
    process.env["PORT"] = TEST_PORT;
    process.env["SKIP_AUTHENTICATION"] = "1";
    server = await require("../src/app").server;
    URL = `http://localhost:${process.env.PORT}`;
  })


  beforeEach(async function() {
    const hash: string = await bcryptAsync("secret");

    UserFacade.users = [
      { name: "Peter Pan", userName: "pp@b.dk", password: hash, role: "user" },
      { name: "Donald Duck", userName: "dd@b.dk", password: hash, role: "user" },
      { name: "admin", userName: "admin@a.dk", password: hash, role: "admin" }
    ]
  



  after(async function() {
    server.close();
  })

  it("Should get the message Hello", async function() {
    const result = await fetch(`${URL}/api/dummy`).then(r => r.json());
    expect(result.msg).to.be.equal("Hello")
  })

  it("Should get three users", async function() {
    const all = await fetch(`${URL}/api/users`).then(r => r.json());  
    expect(all[0].name).to.be.equal("Peter Pan");
    expect(all[1].name).to.be.equal("Donald Duck");
    expect(all[2].name).to.be.equal("admin");
    expect(all.length).to.be.equal(3);
  })

  it("Should Add the user Jan", async function() {
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

  it("Should find the user Donald Duck", async function() {
    const searchUser = "dd@b.dk"
    const user = await fetch(`${URL}/api/users/${searchUser}`).then(r => r.json());
    expect(user.name).to.be.equal("Donald Duck");
  })

  it("Should not find the user xxx@b.dk", async function() {
    try {
      const searchUser = "xxx@b.dk"
      const user = await fetch(`${URL}/api/users/${searchUser}`).then(r => r.json());  
      expect(user.code).to.be.equal(404)
      expect(user.message).to.be.equal("User Not Found")
    } catch (err) {
      expect.fail("Seems like the user didnt exist")
    } finally { }
  })

  it("Should Remove the user Donald Duck", async function() {
    const config = {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    const result = await fetch(`${URL}/api/users/dd@b.dk`, config).then(r => r.json());
    expect(result.status).to.be.equal("User was deleted")
  })

  
  })  

})
