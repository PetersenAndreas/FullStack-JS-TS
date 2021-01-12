import { Promise } from "mongoose";
import { Friends } from "./dbConnectors";

//Resolver Map
export const resolvers = {
    Query: {
        getOneFriend: (root, { id }) => {
            return Friends.findById(id)
            /*
            return new Promise((resolve, object) => {
                Friends.findById(id, (err, friend) => {
                    if(err) reject(err)
                    else resolve(friend)
                })
            })*/
        },
        allFriends: () => Friends.find({})
    },
    Mutation: {
        createFriend: (root, { input }) => {
            const newFriend = new Friends({
                firstName: input.firstName,
                lastName: input.lastName,
                gender: input.gender,
                language: input.language,
                age: input.age,
                email: input.email,
                contacts: input.contacts
            })

            newFriend.id = newFriend._id

            return newFriend.save()
            /*return new Promise((resolve, object) => {
                newFriend.save((err) => {
                    if(err) reject(err)
                    else resolve(newFriend)
                })
            })*/
        },
        updateFriend: (root, {input}) => {
            return Friends.findOneAndUpdate({_id: input.id}, input, {new: true })
            /*return new Promise((resolve, object) => {
                Friends.findOneAndUpdate({_id: input.id}, input, {new: true }, (err, friend) => {
                    if(err) reject(err)
                    else resolve(friend)
                })
            })*/
        },
        deleteFriend: (root, {id}) => {
            return (
                Friends.findByIdAndDelete({ _id: id })
            )
            /*return new Promise((resolve, object) => {
                Friends.remove({_id: id}, (err) => {
                    if(err) reject(err)
                    else resolve("Succesfully deleted friend")
                })
            })*/
        }    
    },
}