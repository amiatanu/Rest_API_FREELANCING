//Require Module
var MongoClient = require('mongodb').MongoClient;
const reader = require('xlsx');
var url = "mongodb://localhost:27017/";
//Data object
let data = [];

//file Read function
function readFile() {
    // Reading our file
    const file = reader.readFile('./Data/Vijay Nagar sample voter data.xlsx')

    const sheets = file.SheetNames
    for (let i = 0; i < sheets.length; i++) {
        const temp = reader.utils.sheet_to_json(
            file.Sheets[file.SheetNames[i]])
        temp.forEach((res) => {
            data.push(res)
        })
    }
    insert();
}

//Insert into database
function insert() {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("Voter");
        dbo.collection("voters").insertMany(data, function (err, res) {
            if (err) throw err;
            console.log("Number of documents inserted: " + res.insertedCount);
            db.close();
        });
    });
}

//Function Call
readFile();
