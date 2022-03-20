//require module
const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/Voter";

//create database
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
//create collection
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Voter");
    dbo.createCollection("voters", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });