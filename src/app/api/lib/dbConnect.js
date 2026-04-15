const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://nextjs:wxIxLqsvxub7fUJf@anisur.kaax7ve.mongodb.net/?appName=anisur";
const uri = "mongodb://localhost:27017";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export const connect = (collection) => {
  const database = "allCaseDB";
  return client.db(database).collection(collection);
};

