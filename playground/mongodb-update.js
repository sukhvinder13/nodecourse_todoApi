// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongo Db server');
    }
    console.log('Connection successfull');
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c59eb705964800b38ff5eee')
    }, {
            $set: {
                name : 'sukhvinder singh'
            }
        }, {
            returnoriginal: false
        }).then((result) => {
            console.log(result);
        })
    // db.close();

});