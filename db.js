const { MongoClient } = require('mongodb');

const databaseName = 'myNewDatabase'; // Your database name
const uri = `mongodb://localhost:27017/${databaseName}`; // Your MongoDB Connection String

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
  try {
    await client.connect();
    return client.db(databaseName); // Return the database instance
  } catch (err) {
    throw err;
  }
}

module.exports = connectToDatabase;