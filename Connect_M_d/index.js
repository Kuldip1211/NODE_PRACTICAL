const { MongoClient } = require("mongodb");

const url = "mongodb+srv://kuldeepchudasama6999:icBAhWXZN9XafXJb@e-com.w630bfc.mongodb.net/";
const D_name = "digitic";

const client = new MongoClient(url);

async function getData() {
  try {
    let result = await client.connect();
    console.log("Connected to MongoDB successfully");

    // Database name where you want to store data
    let db = result.db(D_name);
    let collection = db.collection("users");

    // Perform any operations on the collection here

  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  } finally {
    await client.close();
  }
}

getData();
