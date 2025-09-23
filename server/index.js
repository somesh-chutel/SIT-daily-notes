    const { MongoClient } = require('mongodb');

    // Replace with your MongoDB connection string
    const uri = "mongodb://localhost:27017"; 
    const client = new MongoClient(uri);

    async function connectToMongoDB() {

        try {
            await client.connect();
            console.log("Connected successfully to MongoDB");

            const myDb = client.db("nodejsConn");

            const result = await myDb.collection("user").insertOne({name:"Rajesh Sharma",status:"Active",age:34});

            console.log( result );

        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
        } 
    }

    connectToMongoDB();

    
    

    