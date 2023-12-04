const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/myNewDatabase'; // Replace <dbname> with your database name
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Establishing the connection
async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected successfully to MongoDB');
    return client.db('myNewDatabase'); // Return the database instance
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    throw err;
  }
}

module.exports = connectToDatabase;
