import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoutes.js";
import authRoute from "./routes/authRoute.js";
// import config from './config';


const app = express()

app.use(express.json());
mongoose.connect(process.env.MONGO_URL)
.then(()=>{console.log("Database connection successful")})
.catch((err)=>{console.log(err)})

app.listen(3000,()=>{
    console.log("Listening at port 3000")
})

app.use('/api',userRoute)
app.use('/auth',authRoute)


app.use((err,req,res,next)=>{
    console.log(err);
    const statusCode = err.status || 500
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success : false,
        statusCode,
        message})
})