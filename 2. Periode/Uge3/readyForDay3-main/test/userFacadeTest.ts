import UserFacade from '../src/facades/user';
import { expect } from "chai";
import { ApiError } from '../src/errors/apiError';
import { bryptAsync, bryptCheckAsync } from '../src/utils/bcrypt-async-helper'
import IGameUser from '../src/interfaces/GameUser'
import { assert } from 'console';

describe("Verify the UserFacade", () => {

  //Exercise --> Fix this to handle password hashing, asynchronously
  beforeEach(() => {
    const hash: string = "secret";
    UserFacade.users = [
      { name: "Peter Pan", userName: "pp@b.dk", password: hash, role: "user" },
      { name: "Donald Duck", userName: "dd@b.dk", password: hash, role: "user" },
      { name: "admin", userName: "admin@a.dk", password: hash, role: "admin" }
    ]
  })

})


xit("Should Add the user Kurt", async () => {
  const newUser = { name: "Jan Olsen", userName: "jo@b.dk", password: "secret", role: "user" }
  try {
    const status = await UserFacade.addUser(newUser);
    const jan = await UserFacade.getUser("jo@b.dk");
    const passwordOK = bryptCheckAsync("secret", jan.password);
    expect(status).to.be.equal("User was added")
    expect(UserFacade.users.length).to.equal(4)
  } catch (err) {
    throw new Error("Password did not match")
  } finally { }
})
xit("Should remove the user Peter", async () => {
  try {
  } catch (err) {
  } finally { }
})
xit("Should get three users", async () => {
})

xit("Should find Donald Duck", async () => {
})
xit("Should not find xxx.@.b.dk", async () => {
})

