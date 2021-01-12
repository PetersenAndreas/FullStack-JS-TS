import { Friends } from './dbConnectors';

// resolver map
export const resolvers = {
  Query: {
    getOneFriend: (_, { id }) => {
      return Friends.findById(id)
    },
  },
  Mutation: {
    createFriend: (_, { input }) => {
      const newFriend = new Friends({
        firstName: input.firstName,
        lastName: input.lastName,
        gender: input.gender,
        language: input.language,
        age: input.age,
        email: input.email,
        contacts: input.contacts
      });

      newFriend.id = newFriend._id;

      return newFriend.save()
    },
    updateFriend: (_, { id, input }) => {
      //return Friends.findOneAndUpdate({ _id: input.id }, input, { new: true })
      return Friends.findOneAndUpdate({ _id: id }, input, { new: true })
    },
    deleteFriend: (_, { id }) => {
      return new Promise((resolve, object) => {
        Friends.remove({ _id: id }, (err) => {
          if (err) reject(err)
          else resolve('Successfully deleted friend')
        })
      })
    }
  },
};
