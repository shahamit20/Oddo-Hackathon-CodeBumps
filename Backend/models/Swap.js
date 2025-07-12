const mongoose = require('mongoose')

const swapSchema = new mongoose.Schema({
    requester : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    item :{
         type : mongoose.Schema.Types.ObjectId,
        ref : "Item"
    },
    method :{
        type : String,
        enum :["swap", "points"],
        required : true,
    },
    status: { type: String, enum: ["pending", "approved", "declined", "completed"], default: "pending" }
});
module.exports = mongoose.model('Swap' , swapSchema);