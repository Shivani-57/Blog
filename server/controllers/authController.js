import User from '../models/userModel.js'
import bcrypt from 'bcrypt'
import { errorHandler } from '../utils/errorHandler.js';
import jwt from 'jsonwebtoken'
export const signupController = async (req, res, next) => {
    console.log(req.body);
    const { username, email, password } = req.body;
try{
    if (!username || !email || !password || username === "" || password === "" || email === "") {
        console.log("Invalid username or email")
        console.log("In auth",errorHandler(400,"All fields are required"))
       return next(errorHandler(400,"All fields are required"))
    }
}
catch(err){
    console.log(err);
}


    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = User({ username, email, password: hashedPassword })

    try {
        await newUser.save();
        res.status(200).json({ message: "User saved successfully" });
    }
    catch (err) {
        next(err);
    }

}


export const signinController = async (req,res,next)=>{
    console.log("In signinController",req.body)
    try{
    const {email,password} = req.body;

    if(!email || !password || email==="" || password===""){
        return next(errorHandler(400,"All fields are required"))
    }

    const validUser = await User.findOne({ email: email})
    if(!validUser){
        return next(errorHandler(404,"User not found"))
    }

    const validPassword = bcrypt.compareSync(password,validUser.password)
    if(!validPassword){
        return next(errorHandler(404,"Invalid password"))
    }
    const {password:pass,...restUserData} = validUser._doc
    const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET_KEY)

    res.status(200).cookie("Access_tojken",token,{
        httpOnly: true,
    }).json(restUserData)
 
    }
    catch(err){
        next(err)
    }

}