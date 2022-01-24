const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
const dotenv = require("dotenv");
dotenv.config({ path : '../config.env' });
require("../db/conn");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");


const authenticate = async (req, res, next) => {
    
    try{
        const token = req.cookies.jwtoken;
    if(!token){
        return res.sendStatus(err);
      }
        
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        console.log(verifyToken);
        

        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });

        if(!rootUser){ throw new Error('User Not Found') }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();

    } catch (err){
        res.status(401).send("Unauthorized: No token provided ")
        console.log(err)
    }
}

module.exports = authenticate;