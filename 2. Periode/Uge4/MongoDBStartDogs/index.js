const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://fullstack_user:K1ngGu1er0d@fullstack-cluster.kaemr.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
/*
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/

async function mongoTest() {
    try {
        await client.connect()
        const dogs = client.db("Kennel")
        const dogsCollection = dogs.collection("Dogs");
        await dogsCollection.insertMany([{name: "Togo"}, {name: "Fido"}, {name: "Tut", race: "Dog"}])
        await dogsCollection.insertOne({name: "Kurt"})
        const allDogs = await dogsCollection.find({}).toArray()
        console.log(allDogs)

    } catch(err) {
        console.log(err)
    } 
    finally {
        client.close()
        console.log("Closed")
    }
}

mongoTest();