const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongo Db server');
    }
    console.log('Connection successfull');
    // db.collection('Users').deleteMany({name :'Sukhvinder'}).then((result)=>{
    //     console.log(result);
    //     // console.log(JSON.stringify(docs,undefined,2));
    // });
    db.collection('Todos').findOneAndDelete({complete :false}).then((result)=>{
        console.log(result);
        // console.log(JSON.stringify(docs,undefined,2));
    });
    db.close();
        
});