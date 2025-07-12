const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password : String,
    role : {
        type : String,
        enum : ["user", "admin"],
        default : "user"
    },
    points :{
        type : Number,
        default : 100
    },
});

module.exports = mongoose.model('User' , userSchema);