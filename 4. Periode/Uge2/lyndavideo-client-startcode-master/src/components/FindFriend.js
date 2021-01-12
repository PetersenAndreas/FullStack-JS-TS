import React, { useState } from "react";
import { useLazyQuery } from "@apollo/react-hooks"
import { gql } from "apollo-boost"

const GET_FRIEND = gql`
  query getOneFriend($id:ID!){
  getOneFriend(id:$id){
    id
    firstName
    lastName
    language
    gender
    age
    email
  }
}
`

export default function FindFriend() {
  const [id, setId] = useState("")
  const [getFriend, { loading, error, data }] = useLazyQuery(GET_FRIEND);

  const fetchFriend = () => {
    if (id === "" || id.length !== 24) {
      alert("Please use a valid ID")
    } else {
      getFriend({ variables: { id: id } })

    }
  }
  if (loading) return (<h3>Loading...</h3>)
  if (error) return <p> {JSON.stringify(error)}</p>

  return (

    <div>
      <h2>Fetch a friend using the provided id</h2>
      ID:<input type="txt" value={id} onChange={e => { setId(e.target.value) }} />
      &nbsp; <button onClick={fetchFriend}>Find Friend</button>
      <br />
      <br />
      
      {data ?
        <table border="1px" bordercolor="red">
          <thead>
          <tr>
            <th>ID:</th>
            <th>Firstname:</th>
            <th>LasteName:</th>
            <th>Gender:</th>
            <th>Email:</th>
            <th>Age:</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{data.getOneFriend.id}</td>
            <td>{data.getOneFriend.firstName}</td>
            <td>{data.getOneFriend.lastName}</td>
            <td>{data.getOneFriend.gender}</td>
            <td>{data.getOneFriend.email}</td>
            <td>{data.getOneFriend.age} </td>
          </tr>
          </tbody>
        </table>
        : <p></p>}

    </div>)
}
