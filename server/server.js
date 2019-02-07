var express = require('express');
var bodyparser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/User');
const { ObjectID } = require('mongodb');
var app = express();

app.use(bodyparser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((docs) => {
        res.send(docs);
    }, (err) => {
        res.status(400).send(err);
    })
});
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send(todos);
    }, (err) => {
        res.status(400).send(err);
    })
});

app.get('/todos/:id', (req, res) => {
    // res.send(req.params);
    var id = req.params.id;
    // console.log(id);
    if (!ObjectID.isValid(id)) {
        // console.log('Id is not valid');
        return res.status(404).send();
    } 
        Todo.findById(id).then((todo) => {
            if (!todo) {
                return res.status(404).send();
            }
            res.send({todo });
        }).catch((e) => {
            res.status(400).send();
        })
    


})

app.listen(3000, () => {
    console.log('listening to port no 3000');
});

module.exports = { app };
