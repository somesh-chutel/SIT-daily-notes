    const { MongoClient, ObjectId } = require('mongodb');
    const express = require('express');
    const cors = require('cors');
    const bodyParser = require('body-parser');
    const bcrypt = require("bcrypt");
    const jwt = require("jsonwebtoken");

    const app = express();
    app.use( cors() );
    app.use(bodyParser.json());

    // Replace with your MongoDB connection string
    const uri = "mongodb://localhost:27017"; 
    const client = new MongoClient(uri);
    const port = 5000;

    async function connectToMongoDB() {

        try {
            await client.connect();
            console.log("Connected successfully to MongoDB");

            app.listen(port, ()=>{
                console.log("Server started at port : " + port);
            });

        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
        } 
    }

    connectToMongoDB();

    const myDb = client.db("employee");

    app.get("/allcars", async (req,res)=>{

        const data = await myDb.collection("cars").find({});

        const userArr = await data.toArray();

        res.send( userArr );

    })

     app.post("/login", async (req,res)=>{

        const {email,password} = req.body;


        const data = await myDb.collection("user").findOne({email:email});

        if( data === null ){

           res.status(404).json({error_msg:"User not found"});
        }
        else{

            const isCorrect = await bcrypt.compare( password, data.password );

            if( isCorrect ){

                const payLoad = {
                    userData : data
                }

                const token = await jwt.sign(payLoad,"my_secret_token");

                res.status(200).json({jwt_token:token});
            }
            else{

                res.status(404).json({error_msg:"Username and password didnt matched!!!"});
            }

        }

        console.log( data );
        res.send( data );

    })

    app.post("/create", async ( req,res)=>{

        const {name,age,password,email} = req.body;

        const hashPassword = await bcrypt.hash(password,10);

        const userInserted = await myDb.collection("user").insertOne({name:name,age:age,password:hashPassword,email:email});

        res.send( userInserted );

    })


    app.put("/update/:id", async ( req,res)=>{

        const {name,age,status} = req.body;

        const id = req.params;

        const userInserted = await myDb.collection("user").updateOne({_id : new ObjectId(id)},{$set:{name:name,age:age,status:status}});

        res.send( userInserted );

    });
    