const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });
const User = require('../models/userSchema')
const Post = mongoose.model("Post");


const authenticate = async (req, res, next) => {
    const {authorization} = req.headers
    //authorization === Bearer ewefwegwrherhe
    if(!authorization){
       return res.status(401).json({error:"you must be logged in"})
    }
    const token = authorization.replace("Bearer ","")
    console.log(token);
    jwt.verify(token,process.env.SECRET_KEY,(err,payload)=>{
        if(err){
         return   res.status(401).json({error:"you must be logged in"})
        }

        const {_id} = payload
        User.findById(_id).then(userdata=>{
            req.user = userdata
            next()
        })
        
        
        
    })
  };

  // Create Users Posts

// router.post('/createpost',  (req, res) => {
//     const { title, body , pic} = req.body

//     if(!title || !body || !pic) {
//         return res.status(422).json({ error : 'Please Fill the the fields properly'});
//     }
//     const post = new Post ({
//         title,
//         body, 
//         photo:pic,
//         postedBy: req.user  
//     })
    
//     post.save().then(result => {
//         res.json({post: result })
//     })
//     .catch(err => {
//         console.log(err)
//     })
// })

// Get All User Posts

// router.get('/allpost', (req,res) => {
//      Post.find()
//     .populate("postedBy", "_id name")
//      .then(posts => {
//          res.json({posts})
//      } )
//      .catch(err => {
//          console.log(err);
//      })
// }) 

// Get All of my Posts

router.get('/mypost', authenticate, (req, res) => {
    Post.find({postedBy: req.user._id})
    .populate("postedBy", "_id name")
    .then(mypost => {
        res.json({mypost})
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router;