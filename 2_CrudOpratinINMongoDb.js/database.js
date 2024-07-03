const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://kanbha:kanbha6999@tp.84rhaff.mongodb.net/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let database;

async function connectDB() {
  if (!database) {
    await client.connect();
    database = client.db('test').collection('users');
    console.log('Database connection established')
  }
  return database;
}

module.exports = connectDB;


