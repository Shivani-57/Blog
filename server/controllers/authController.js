import User from '../models/userModel.js'
import bcrypt from 'bcrypt'
export const authController = async (req,res)=>{
    console.log(req.body);
    const {username,email,password} = req.body;

    if(!username || !email || !password ||username ===""||password ===""||email ===""){
        return res.status(400).json({message:"Please fill all the fields"});
    }

    const hashedPassword = bcrypt.hashSync(password,10);
    const newUser = User({username,email,password:hashedPassword})

    try{
        await newUser.save();
        res.status(200).json({message:"User saved successfully"});
    }
    catch(err){
        res.status(500).json({message:err.message});
    }

}