import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import mongoose from "mongoose";
// import config from './config';


const app = express()

mongoose.connect(process.env.MONGO_URL)
.then(()=>{console.log("Database connection successful")})
.catch((err)=>{console.log(err)})

app.listen(3000,()=>{
    console.log("Listening at port 3000")
})