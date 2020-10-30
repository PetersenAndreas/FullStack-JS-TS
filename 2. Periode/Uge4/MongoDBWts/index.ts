import * as mongo from "mongodb";
const path = require("path")
require('dotenv').config({ path: path.join(process.cwd(), '.env') })
const MongoClient = mongo.MongoClient;
const uri:any = process.env.CONNECTION;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

/* IMPORTANT ---> 
   Before you start, do a tcs --init in the root of the project to create tsconfig.json
*/




async function insertAndReadData() {
    try {
        await client.connect()
        const db = client.db("test")
        await db.collection("inventory").deleteMany({})
        const result = await db.collection("inventory").insertOne(
            { "item" : "canvas",
              "qty" : 100,
              "tags" : ["cotton"],
              "size" : { "h" : 28, "w" : 35.5, "uom" : "cm" }
            }
         )
         //console.log("Count", result.insertedCount)
         //console.log("Id", result.insertedId)
         //console.log("Ops", result.ops)
         //---- Virker ikke af en eller anden grund ----
         //var myCursor = db.collection("inventory").find({}) 
         //myCursor.forEach((data: any) => {if(data){console.log(data)}}, (err: any) => {if(err) {console.log(err)}})

         let results = await db.collection("inventory").find({}).toArray()
         console.log(results)

    } catch (err) {
        console.log("UPPS --->", err)
    }
    finally {
        client.close();
        console.log("Connection Closed")
    }
}


async function connectSetupDataAndGetDB() {
    //TBD
    await client.connect()
    const db = client.db("test")
    await db.collection("inventory").deleteMany({})
    await db.collection("inventory").insertMany( [
        { "item": "journal", "qty": 25, "size": { "h": 14, "w": 21, "uom": "cm" }, "status": "A" },
        { "item": "notebook", "qty": 50, "size": { "h": 8.5, "w": 11, "uom": "in" }, "status": "A" },
        { "item": "paper", "qty": 100, "size": { "h": 8.5, "w": 11, "uom": "in" }, "status": "D" },
        { "item": "planner", "qty": 75, "size": { "h": 22.85, "w": 30, "uom": "cm" }, "status": "D" },
        { "item": "postcard", "qty": 45, "size": { "h": 10, "w": 15.25, "uom": "cm" }, "status": "A" }
    ]);
    return db;

}
async function readDataWithQueries() {
    try {
        const db = await connectSetupDataAndGetDB();
        console.log("---1---")
        let result = await db.collection("inventory").find( { status: "D" } ).toArray()
        console.log(result)

        console.log("---2---")
        result = await db.collection("inventory").find( { size: { h: 14, w: 21, uom: "cm" } } ).toArray()
        console.log(result)

        console.log("---3---")
        result = await db.collection("inventory").find( { "size.uom": "in" } ).toArray()
        console.log(result)
    } catch (err) {
        console.log("UPPS --->", err)
    }
    finally {
        client.close();
        console.log("Closes connection")
    }
}

async function readWithOptions() {
    try {
        const db = await connectSetupDataAndGetDB();
        let result = await db.collection("inventory").find(
            {},
            {
                projection: {item: 1, qty: 1, _id: 0},
                limit: 3,
                sort: {qty: -1}
            }
            ).toArray()
        console.log(result)
        
    } catch (err) {
        console.log("UPPS --->", err)
    }
    finally {
        client.close();
        console.log("Closes connection")
    }
}

async function readDataWithOperatorsAndCompoundQueries() {
    try {
        const db = await connectSetupDataAndGetDB();

        console.log("---1---")
        let result = await db.collection("inventory").find( { "size.h": { $lt: 15 } } ).toArray()
        console.log(result)

        console.log("---2---")
        result = await db.collection("inventory").find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } ).toArray()
        console.log(result)

        console.log("---3---")
        result = await db.collection("inventory").find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } ).toArray()
        console.log(result)

    } catch (err) {
        console.log("UPPS --->", err)
    }
    finally {
        client.close();
        console.log("Closes connection")
    }
}
async function updateData() {
    try {
        console.log("---1---")
        const db = await connectSetupDataAndGetDB();
        let result = await db.collection("inventory").findOneAndUpdate(
            { "item" : "paper" }, // specifies the document to update
            {
              $set: {  "size.uom" : "cm",  "status" : "P" },
              $currentDate: { "lastModified": true },
            },
            {returnOriginal: false}
        )
        console.log(result.value)
        
        console.log("---2---")
        const res = await db.collection("inventory").updateMany(
            { "qty" : { $lt: 50 } }, // specifies the documents to update
            {
               $set: { "size.uom" : "cm", "status": "P" },
               $currentDate : { "lastModified": true }
            }
        )
        console.log(res.modifiedCount)

    } catch (err) {
        console.log("UPPS --->", err)
    }
    finally {
        client.close();
        console.log("Closes connection")
    }

}
async function deleteData() {
    try {
        const db = await connectSetupDataAndGetDB();
        
        console.log("---1---")
        let result = await db.collection("inventory").deleteOne(
            { "status": "D" } // specifies the document to delete
        )
        console.log("Number of deletes: ",result.deletedCount)

        console.log("---2---")
        result = await db.collection("inventory").deleteMany(
            { "status" : "A" } // specifies the documents to delete
        )
        console.log("Number of deletes: ",result.deletedCount)
        
    } catch (err) {
        console.log("UPPS --->", err)
    }
    finally {
        client.close();
        console.log("Closes connection")
    }
}
//insertAndReadData();
//readDataWithQueries();
//readWithOptions()
//readDataWithOperatorsAndCompoundQueries();
//updateData()
deleteData()