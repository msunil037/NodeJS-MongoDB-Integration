/**
 * Importing mongodb driver properties using require() 
 * 
 * Uncomment the below code to test
 */
// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "test-crud";

/**
 * ObjectId related properties
 * 
 * Uncomment the below code to test
 */
// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());
// console.log(id.id.length);

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    console.log("Connected Successfully!");


    const db = client.db(databaseName);

    /**
     * Querying Documents
     * 
     * Uncomment the below code to test
     */

    // db.collection('users').findOne({'name' : 'Sunil', 'age' : 27}, (error, user) => {
    //     if(error) return console.log('Unable to fetch');
    //     console.log(user);
    // })
    // db.collection('users').find({age : 27}).toArray((error, users) => {
    //   console.log(users);
    // })
    // db.collection('users').find({age : 27}).count((error, users) => {
    //   console.log(users);
    // })

    // Inserting Documents

    /**
     * Inserting Documents
     * 
     * Uncomment the below code to test
     */

    // db.collection("users").insertOne(
    //     {name: "Sunil",age: 27},
    //     (error, result) => { 
    //         if (error) return console.log("Unable to insert user");
    //         console.log(result.ops);
    //     }
    // );


    // db.collection('users').insertMany([
    //     {
    //         name : "Sunil",
    //         age : 27
    //     },
    //     {
    //         name : "Sibun",
    //         age : 25
    //     }
    // ], (error, result) => {
    //     if(error) return console.log("Unable to insert user");
    //     console.log(result.ops);
    // })

    /**
     * Updating Documents
     * 
     * Uncomment the below code to test
     */

    // db.collection('users').updateOne({
    //   _id : new ObjectID('60e9c76a814e3017a3e49fb9')
    // }, {
    //   $set: {
    //     name : 'Vikram'
    //   },
    //   $inc: {
    //     age : 1
    //   }
    // }).then((result) => {
    //   console.log(result);
    // }).catch(error => {
    //   console.error(error);
    // })

    /**
     * Deleting Documents
     * 
     * Uncomment the below code to test
     */

    // db.collection('users').deleteOne({_id : new ObjectID('60e9c76a814e3017a3e49fb9')}).then(result => {
    //   console.log(result);
    // }).catch(error => {
    //   console.error(error);
    // })

    // db.collection('users').deleteMany({age: 27}).then(result => {
    //   console.log(result);
    // }).catch(error => {
    //   console.error(error);
    // })
  }
);
