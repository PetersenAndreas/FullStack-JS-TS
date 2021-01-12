import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks"
import { gql } from "apollo-boost"

const UPDATE_FRIEND = gql`
  mutation updateFriend($id: ID, $firstName: String $lastName: String $gender: Gender $age: Int $email: String){
    updateFriend(input: {id: $id, firstName: $firstName, lastName: $lastName, gender: $gender, age: $age, email: $email}){ 
      id
      firstName
      lastName
      gender
      age
      email
  }
}
`

const UpdateFriend = ({ initialFriend, allowEdit }) => {
  const [friendToUpdate, { data }] = useMutation(UPDATE_FRIEND);
  const EMPTY_FRIEND = { id: "", firstName: "", lastName: "", gender: "", age: "", email: "" }
  let newFriend = initialFriend ? initialFriend : { ...EMPTY_FRIEND }

  const [friend, setFriend] = useState({ ...newFriend })
  const [readOnly, setReadOnly] = useState(!allowEdit)

  const handleChange = (event) => {
    const id = event.target.id;
    friend[id] = event.target.value;
    setFriend({ ...friend })
  }

  function clean(obj) {
    for (let propName in obj) {  
      if (obj[propName] === "") {
        delete obj[propName];
      }
    }
    if("age" in obj) {
        obj.age = parseInt(obj.age)
    }
    return obj
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    let tmp = clean(friend)
    alert(JSON.stringify(tmp))
    friendToUpdate({ variables: tmp })
    setFriend({ ...EMPTY_FRIEND })
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <h2>Update a friend</h2>
      <label>
        ID for user to update<br />
        <input type="text" readOnly={readOnly} id="id" value={friend.id} onChange={handleChange} />
      </label>
      <br />
      <label>
        FirstName<br />
        <input type="text" readOnly={readOnly} id="firstName" value={friend.firstName} onChange={handleChange} />
      </label>
      <br />
      <label>
        LastName <br />
        <input readOnly={readOnly} type="text" id="lastName" value={friend.lastName} onChange={handleChange} />
      </label>
      <br />
      <label>
        E-Mail <br />
        <input readOnly={readOnly} type="text" id="email" value={friend.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Gender &nbsp;
          <select disabled={readOnly} id="gender" value={friend.gender} onChange={handleChange}>
          <option value="">---SELECT---</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
          <option value="OTHER">Other</option>
        </select>
      </label>
      <br />
      <label>
        Age <br />
        <input readOnly={readOnly} type="number" id="age" value={friend.age} onChange={handleChange} />
      </label>
      <br /><br />
      {!readOnly && <input type="submit" value="Update" />}
    </form>
    </div>
  );
}

export default UpdateFriend;