const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongo Db server');
    }
    console.log('Connection successfull');
    db.collection('Users').find({name :'Sukhvinder'}).toArray().then((docs)=>{
        console.log('users');
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log('Unable to connect ',err);
    })
    db.close();
        
});