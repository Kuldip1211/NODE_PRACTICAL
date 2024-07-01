const { MongoClient } = require("mongodb");

// url for data base
const url = "mongodb+srv://kuldeepchudasama6999:icBAhWXZN9XafXJb@e-com.w630bfc.mongodb.net/";

// database name 
const D_name = "digitic";

// create a client and connect it 
const client = new MongoClient(url);

// get function for connect and get data 
async function getData() {
  try {
   // in result connect the client
    let result = await client.connect();
    console.log("Connected to MongoDB successfully");

    // Database name where you want to store data
    let db = result.db(D_name);
    let collection = db.collection("users");

    // in user we featch all user and print the all user 
    let users = await collection.find({}).toArray();
    console.log("Users:", users);

  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  } finally {
    await client.close();
  }
}


// callback function
getData();
