const mongoose = require('mongoose')
const itemSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    title : String,
    decription : String,
    category : String,
    type : String,
    size : String,
    condition : String,
    tags :[String],
    images : [String],
    status : {
        type : String,
        enum : ["available", "swapped", "pending"],
        default : "available"
    },
    isApproved : {
        type : Boolean,
        default : false
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
});

module.exports = mongoose.model('Item', itemSchema);