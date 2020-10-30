import UserFacade from '../src/facades/userFacades';
import { expect } from "chai";
import { ApiError } from '../src/errors/apiError';
import { bcryptAsync, bcryptCheckAsync } from '../src/utils/bcrypt-async-helper'
//import IGameUser from '../src/interfaces/GameUser'
import { assert } from 'console';
import { notDeepEqual } from 'assert';
import { getNodeMajorVersion } from 'typescript';

describe("Verify the UserFacade", function() {

  //Exercise --> Fix this to handle password hashing, asynchronously
  beforeEach( async function() {
    const hash: string = await bcryptAsync("secret");
    UserFacade.users = [
      { name: "Peter Pan", userName: "pp@b.dk", password: hash, role: "user" },
      { name: "Donald Duck", userName: "dd@b.dk", password: hash, role: "user" },
      { name: "admin", userName: "admin@a.dk", password: hash, role: "admin" }
    ]
  })

  it("Should Add the user Jan", async function() {
    const newUser = { name: "Jan Olsen", userName: "jo@b.dk", password: "secret", role: "user" }
    try {
      const status = await UserFacade.addUser(newUser);
      const jan = await UserFacade.getUser("jo@b.dk");
      const passwordOK = await bcryptCheckAsync("secret", jan.password);
      expect(status).to.be.equal("User was added")
      expect(UserFacade.users.length).to.equal(4)
    } catch (err) {
      expect.fail("Seems like password was not hashed correctly")
    } finally { }
  })

  it("Should remove the user Peter", async function() {
    try {
      const deleteUser = await UserFacade.deleteUser("pp@b.dk")
      expect(UserFacade.users.length).to.equal(2);
    } catch (err) {
      expect.fail("Seems like the user didnt get deletede")
    } finally { }
  })

  it("Should get three users", async function() {
    const users = await UserFacade.getAllUsers()
    expect(users.length).to.be.equal(3);
  })

  it("Should find Donald Duck", async function() {
    const user = await UserFacade.getUser("dd@b.dk")
    expect(user.name).to.be.equal("Donald Duck");
  })

  it("Should not find xxx.@.b.dk", async function() {
    try {
      await UserFacade.getUser("xxx.@.b.dk");
      //Expecting to fail
    } catch (err) {
      expect(err).to.be.instanceOf(Error);
      expect(err.message).to.equal("User Not Found");
    } finally { }
  })

})