    const { MongoClient } = require('mongodb');
    const express = require('express');

    const app = express();

    const port = 5000;

    // Replace with your MongoDB connection string
    const uri = "mongodb://localhost:27017"; 
    const client = new MongoClient(uri);

    async function connectToMongoDB() {

        try {
            await client.connect();
            console.log("Connected successfully to MongoDB");

            app.listen( port, ()=>{

                console.log("Server started at port : " + port);
            })

        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
        } 
    }

    connectToMongoDB();

    const myDb = client.db("employee");

    app.get("/allusers",async( req,res )=>{

        const users = await myDb.collection("cars").find({});

        const result = await users.toArray();

        res.send( result );
    })

    app.get("/user",async( req,res )=>{

        const user = await myDb.collection("cars").findOne();

        res.send( user );
    })
    

    