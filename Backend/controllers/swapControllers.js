const Swap = require('../models/Swap')

exports.createSwap = async(req , res)=>{
    try{
        const newSwaps = await Swap.create({
             requester : req.user.id,
             item : req.body.item,
             method : req.body.method
        })
        res.status(201).json(newSwaps);
    }
    catch(err){
        res.status(500).json({ err });
    }
}

exports.getUser = async (req , res)=>{
    const newUser = await Swap.find({requester: req.user.id }).populate("item");
     res.json(newUser);
}