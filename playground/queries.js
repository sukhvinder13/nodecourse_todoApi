const {mongoose}=require('./../server/db/mongoose');

const {Todo}=require('./../server/models/todo');

var id='8c5c7c10d89e02341895b907';

Todo.findById(id).then((res)=>{
    if(!res){
        return console.log('There is not data availan=ble');
    }
    console.log('user',res);
});

Todo.find({
    _id:id
}).then((user)=>{
    console.log('userdata is',user);
})