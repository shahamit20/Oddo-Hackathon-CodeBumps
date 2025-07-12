const Item = require('../models/Item')

exports.addItem = async(req , res)=>{
    const imageLinks = req.files.map(file => file.path); 
    try{
        const item = await Item.create({
            ...req.body,
            images: imageLinks,
            user : req.user.id
        });
        res.status(201).json(item)
    }
    catch(err){
         res.status(500).json({ err });
    }
}
exports.getAllItems= async(req , res)=>{
    const items = await Item.find({ isApproved: true }).populate("user", "name email");
    res.json(items);
}

exports.getMyItems = async (req , res)=>{
    const item = await Item.find({user : req.user.id})
    res.json(item);
}

exports.getItemById = async (req , res)=>{
    const item = await Item.findById(req.params.id).populate("user" , "name email")
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
}