import User from '../models/userModel.js'
import bcrypt from 'bcrypt'
import { errorHandler } from '../utils/errorHandler.js';
export const authController = async (req, res, next) => {
    console.log(req.body);
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === "" || password === "" || email === "") {
       next(errorHandler(400,"All fields are required"))
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