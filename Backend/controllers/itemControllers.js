const Item = require('../models/Item')

exports.additem = async(req , res)=>{
    try{
        const item = await Item.create({
            ...req.body,
            user : req.user.id
        });
        res.status(201).json(item)
    }
    catch(err){
         res.status(500).json({ err });
    }
}
exports.getAllitem= async(req , res)=>{
    const items = await Item.find({ isApproved: true }).populate("user", "name email");
    res.json(items);
}

exports.getMyitem = async (req , res)=>{
    const item = await Item.find({user : req.user.id})
    res.json(item);
}

exports.getItembyid = async (req , res)=>{
    const item = await Item.findById(req.params.id).populate("user" , "name email")
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
}