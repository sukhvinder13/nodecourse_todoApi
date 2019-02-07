var express=require('express');
var bodyparser=require('body-parser');

var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {User}=require('./models/User');

var app=express();

app.use(bodyparser.json());

app.post('/todos',(req,res)=>{
    var todo = new Todo({
        text: req.body.text 
    });
    todo.save().then((docs)=>{
        res.send(docs);
    },(err)=>{
        res.status(400).send(err);
    })
});
app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send(todos);
    },(err)=>{
        res.status(400).send(err);
    })
});

app.listen(3000,()=>{
console.log('listening to port no 3000');
});

module.exports={app};
