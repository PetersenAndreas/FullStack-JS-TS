import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks"
import { gql } from "apollo-boost"

const DELETE_FRIEND = gql`
  mutation deleteFriend($id:ID!){
    deleteFriend(id:$id){
    firstName
    lastName
  }
}
`

export default function DeleteFriend() {
    const [id, setId] = useState("")
    const [deleteFriend, { loading, error, data }] = useMutation(DELETE_FRIEND);

    const friendRemove = () => {
        if (id === "" || id.length !== 24) {
            alert("Please use a valid ID")
        } else {
            deleteFriend({ variables: { id: id } })

        }
    }
    if (loading) return (<h3>Loading...</h3>)
    if (error) return <p> {JSON.stringify(error)}</p>
    return (
        <div>
            <h2>Delete Friend</h2>
            ID:<input type="txt" value={id} onChange={e => { setId(e.target.value) }} />
            &nbsp; <button onClick={friendRemove}>Delete Friend</button>
            <br />
            <br />
            {data ? <p>{data.deleteFriend.firstName} {data.deleteFriend.lastName} was deleted</p> : <p></p>}
        </div>
    );
}