const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const validateEmail = (email) => {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
};

const UserSchema = new Schema({
    name : {
        type: String,
        required: [true , 'PROVIDE A NAME']
    } , 
    email : {
        type: String,
        required : [true , 'E-MAIL ADDRESS IS REQUIRED'],
        unique : [true , 'THAT E-MAIL ADDRESS IS TAKEN, PLEASE TRY ANOTHER ONE'],
        //validate: [validateEmail, 'Please fill a valid email address'],
        match : [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address'
        ]
    },
    role : {
        type : String,
        default : 'user',
        enum : ['user' , 'admin']
    },
    password : {
        type: String,
        minlength : [6 , 'PLEASE ENTER A VALID PASSWORD'],
        required : [true , 'PLEASE ENTER A PASSWORD'],
        select : false,
    },
    createdAt : {
        type : Date,
        default : Date.now(),
    },
    title : {
        type : String
    },
    about : {
        type : String
    },
    address : {
        type : String
    },
    webSite : {
        type : String
    },
    profileImage : {
        type : String,
        default : 'default.jpg'
    },
    blocked : {
        type : Boolean,
        default : false
    }
});

module.exports = mongoose.model('User' , UserSchema);
/*const User = mongoose.model('User' , UserSchema);
module.exports = User;*/
