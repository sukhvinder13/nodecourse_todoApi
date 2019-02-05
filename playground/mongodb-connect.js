const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongo Db server');
    }
    console.log('Connection successfull');
    // db.collection('Todos').insertOne({
    //     text: 'Something',
    //     complete: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('unable to insert todo', err);

    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })
    db.collection('Users').insertOne({
        name: 'Sukhvinder',
        age: 25,
        location: 'Nanded'
    }, (err, result) => {
        if (err) {
            return console.log('unable to insert todo', err);

        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    })
    db.close();
        
});