//requer model
const {MongoClient} = require('mongodb')
const url= 'mongodb://localhost:27017';
const databaseName='Voter'
const client= new MongoClient(url); 

//Connect with Mongodb database
async function dbConnect()
{
    let result = await client.connect();
    db= result.db(databaseName);
    return db.collection('voters');
}
//Export module Function
module.exports=dbConnect;