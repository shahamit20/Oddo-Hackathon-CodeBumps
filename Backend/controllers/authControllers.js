const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

exports.registerUser = async (req , res) =>{
    const { name, email, password} = req.body;
    try{
       const exist = await User.findOne({email})
       if(exist){
        return res.status(400).json({ message: "User already exists" });
       }

       const hashed = await bcrypt.hash(password , 10);
       const user = await User.create({
        name ,
        email,
        password : hashed
       })
       return res.status(201).json({message : "User Registered", user})
    }
    catch(err){
       res.status(500).json({err});
    }
}

exports.loginUser = async(req, res)=>{
    const {email, password} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({message: "User not found" })
        }

        const match = await bcrypt.compare(password , user.password)
        if (!match) return res.status(401).json({ message: "Invalid credentials" });
        
        const token = jwt.sign({ id : user._id , role : user.role}, process.env.JWT_SECRET,{
            expiresIn : "7d",
        })
        res.json({token , user});
    }
     catch (error) {
    res.status(500).json({ error });
  }
}
