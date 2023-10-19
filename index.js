
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();

// middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5001;

// romanami652
//2XeR0WwmJ9JPG0N8



const uri = "mongodb+srv://romanami652:2XeR0WwmJ9JPG0N8@cluster0.wgbfr5a.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection

    const userCollection = client.db("userDB").collection("ford");

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
app.get("/", (req, res) => {
    res.send("Crud is running .....");
  });
  
  app.listen(port, () => {
    console.log(`App is running on port ${port}`);
  });