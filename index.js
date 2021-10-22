const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient } = require('mongodb');
// user: mydbuser1
// password: Avfyo1v7UkVrpm2s



const uri = "mongodb+srv://mydbuser1:Avfyo1v7UkVrpm2s@cluster0.om5y9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// client.connect(err => {
//     const collection = client.db("foodMaster").collection("users");
//     // perform actions on the collection object
//     console.log('hitting the database');
//     const user = { name: 'Shipu1', email: 'shipu.monjurur@gmail.com', phone: '01784697770' };
//     collection.insertOne(user)
//         .then(() => {
//             console.log('insert success');
//         })
//     // client.close();
// });

async function run() {
    try {
        await client.connect();
        const database = client.db("foodMaster");
        const usersCollection = database.collection("users");
        // create a document to insert
        const doc = {
            name: "special 1",
            email: "special@gmail.com",
        }
        const result = await usersCollection.insertOne(doc);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } finally {
        await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Hello from Mongodb crud');
})

app.listen(port, () => {
    console.log('Running server on port', port);
})