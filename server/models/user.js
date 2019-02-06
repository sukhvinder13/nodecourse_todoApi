var mongoose=require('mongoose');
var User= mongoose.model('User',{
    email:{
        type:String,
        minlength:1,
        required: true,
        trim:true
    },
    password:{
        type:String ,
        default: false
    }
});

module.exports={User}