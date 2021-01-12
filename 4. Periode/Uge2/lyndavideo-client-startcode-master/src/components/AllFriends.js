import React from "react";
import { useQuery } from "@apollo/react-hooks"
import { gql } from "apollo-boost"

const ALL_FRIENDS = gql`
{
  allFriends{
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

export default function All() {
  const { loading, error, data, networkStatus } = useQuery(ALL_FRIENDS, { pollInterval: 5000 });
  if (loading) return (<h3>Loading...</h3>)
  if (error) return <p> {JSON.stringify(error)}</p>
  if (!data) return <p>No Data</p>

  return data.allFriends.map(f => {
    const age = f.age ? `, Age: ${f.age}` : null;
    return <p key={f.id}>{f.id}, {f.firstName} {f.lastName}, {f.gender}, {f.email} {age} </p>
  })


}