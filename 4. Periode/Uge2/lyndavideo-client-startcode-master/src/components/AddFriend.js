import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks"
import { gql } from "apollo-boost"

const ADD_FRIEND = gql`
  mutation createFriend($firstName: String $lastName: String $gender: Gender $age: Int $email: String){
    createFriend(input: {firstName: $firstName, lastName: $lastName, gender: $gender, age: $age, email: $email}){ 
      id
      firstName
      lastName
      gender
      age
      email
  }
}
`

const AddFriend = ({ initialFriend, allowEdit }) => {
  const [friendToADD, { data }] = useMutation(ADD_FRIEND);
  const EMPTY_FRIEND = { firstName: "", lastName: "", gender: "OTHER", age: "", email: "" }
  let newFriend = initialFriend ? initialFriend : { ...EMPTY_FRIEND }

  const [friend, setFriend] = useState({ ...newFriend })
  const [readOnly, setReadOnly] = useState(!allowEdit)

  const handleChange = (event) => {
    const id = event.target.id;
    friend[id] = event.target.value;
    setFriend({ ...friend })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    //alert(JSON.stringify(friend))
    if(friend.firstName.length !== 0 || friend.lastName.length !== 0) {
      friendToADD({ variables: { firstName: friend.firstName, lastName: friend.lastName, gender: friend.gender, age: parseInt(friend.age), email: friend.email } })
    } else {
      alert("Please input a firstname, lastname and a gender")
    }

    setFriend({ ...EMPTY_FRIEND })
  }


  return (
    <div>
    <form onSubmit={handleSubmit}>
      <h2>Add a friend</h2>
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
      {!readOnly && <input type="submit" value="Submit" />}
    </form>
    {data ? <p>{data.createFriend.firstName} {data.createFriend.lastName} was created</p> : <p></p>}
    </div>
  );
}

export default AddFriend;