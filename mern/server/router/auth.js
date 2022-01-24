const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
require("../db/conn");
const mongoose = require('mongoose');
const User = require("../models/userSchema");
const Post = mongoose.model("Post");
const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });
const cookieParser = require("cookie-parser");
router.use(cookieParser());

router.get("/", (req, res) => {
  res.send("Hello World from the server Route");
});

// By Using Async And Await

router.post("/register", async (req, res) => {
  const { name, email, phone, work, provinance, city, password, cpassword } =
    req.body;

  if (
    !name ||
    !email ||
    !phone ||
    !work ||
    !provinance ||
    !city ||
    !password ||
    !cpassword
  ) {
    return res.status(422).json({ error: "Please Filled the field Properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already Exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "password are not matching" });
    } else {
      const user = new User({
        name,
        email,
        phone,
        work,
        provinance,
        city,
        password,
        cpassword
      });

      await user.save();

      res.status(201).json({ message: "User registered Successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/register", (req, res) => {
  res.send("REGISTER");
});

// Login Router

router.post("/signin", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Please Fill the data properly " });
    }

    const userLogin = await User.findOne({ email: email });
    
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      if (isMatch) {
        
 
        // Need to generate the token and stored cookie after the password match
        token = await userLogin.generateAuthToken();
       
        //FOR COOKIES IN BROSWER
        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true,
        });

        const {_id, name, email} = userLogin

        res.json({token, user:{_id, name, email},  message: "user Signin Successfully" });
      } else {
        res.status(400).json({ message: "Invalid Credential pass" });
      }
    } else {
      res.status(400).json({ message: "Invalid Credential q" });
    }
  } catch (err) {
    console.log(err);
  }
});

// Middleware

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies["jwtoken"];
    if (!token) {
      return res.send("nothing find");
    }

    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    console.log(verifyToken);
    
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    console.log(rootUser);

    if (!rootUser) {
      throw new Error("User Not Found");
    }

    req.token = token;
    console.log(token);
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    console.log(req.userID);

    next();
  } catch (err) {
    res.status(401).send("Unauthorized: No token provided ");
    console.log(err);
  }
};

// get user data for contact us page

router.get("/getdata", authenticate, (req, res) => {
  
    console.log("Hello my contact us page");
    console.log(req.rootUser);
    res.send(req.rootUser);
  
    res.status(500).send(err);

});

// Logout

router.get("/logout", authenticate, (req, res) => {
  try {
    console.log("Hello my Logout Page");
    res.clearCookie("jwtoken");
    res.redirect("/login");
    res.status(200).send("User Logout");
  } catch (error) {
    res.status(500).send(error);
  }
});

// get User Data
const getuser = async (req, res) =>{
  try{
    const users = await User.find();
    res.status(200).json(users);
  }catch (err){
    res.status(404).json({ message : err.message});
  }
} 
router.get("/getusers", authenticate, getuser);

// my profile data
router.get("/myprofile", authenticate, (req, res) => {
  
  console.log("Hello my contact us page");
  res.send(req.rootUser);

  res.status(500).send(err);

});

// Getting User Message

router.post("/contact", authenticate, async (req, res) => {
  try{

   const { name, email, phone, message }  = req.body;

   if(!name || !email || !phone || !message){

     console.log('Error in conatct Form');
     return res.json({ error : 'please the conatact form'} );
   }

   const userContact = await User.findOne({_id: req.userID});

   if(userContact) {

    const userMessage = await userContact.addMessage(name, email, phone, message);

    await userContact.save();

    res.status(201).json({message: 'User Contact message send Successfully'}); 
   }

  }catch(err){
    console.log(err);
  }

  
});

// Search the User

router.get('/search-user', async (req, res) => {
  try {
      const post = await User.find();
      res.status(200).json(post);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
} )


// Create Users Posts

router.post('/createpost',authenticate, async (req, res) => {
  const { title, body , pic} = req.body

  if(!title || !body || !pic) {
      return res.status(422).json({ error : 'Please Fill the the fields properly'});
  }
  try{

    const post = new Post({
      title,
      body,
      photo:pic,
      postedBy:req.userID
    })

    await post.save();

    res.status(201).json({ message: "User Create Message Successfully" });
  
  } catch (err) {
    console.log(err)
  }
  
})

// Get All User Posts

router.get('/allpost', (req,res) => {
  Post.find()
 .populate("postedBy", "_id name")
 .populate("comments.postedBy","_id name")
 .sort('-createdAt')
  .then(posts => {
      res.json({posts})
  } )
  .catch(err => {
      console.log(err);
  })
}) 


// Like The post  

router.put('/like',authenticate,(req,res)=>{
  Post.findByIdAndUpdate(req.body.postId,{
      $push:{likes:req.userID._id}
  },{
      new:true
  }).exec((err,result)=>{
      if(err){
          return res.status(422).json({error:err})
      }else{
          res.json(result)
      }
  })
})

// Unlike the post

router.put('/unlike',authenticate,(req,res)=>{
  Post.findByIdAndUpdate(req.body.postId,{
      $pull:{likes:req.userID._id}
  },{
      new:true
  }).exec((err,result)=>{
      if(err){
          return res.status(422).json({error:err})
      }else{
          res.json(result)
      }
  })
})

// Comment on Post

router.put('/comment',authenticate,(req,res)=>{
  const comment = {
      text:req.body.text,
      postedBy:req.userID._id
  }
  Post.findByIdAndUpdate(req.body.postId,{
      $push:{comments:comment}
  },{
      new:true
  })
  .populate("comments.postedBy","_id name")
  .populate("postedBy","_id name")
  .exec((err,result)=>{
      if(err){
          return res.status(422).json({error:err})
      }else{
          res.json(result)
      }
  })
})

// Delete Post

router.delete('/deletepost/:postId',authenticate,(req,res)=>{
  Post.findOne({_id:req.params.postId})
  .populate("postedBy","_id")
  .exec((err,post)=>{
      if(err || !post){
          return res.status(422).json({error:err})
      }
      if(post.postedBy._id.toString() === req.userID._id.toString()){
            post.remove()
            .then(result=>{
                res.json(result)
            }).catch(err=>{
                console.log(err)
            })
      }
  })
})

// Delete Comment

router.delete('/deletecommentpost/:postId',authenticate,(req,res)=>{
  Post.findOne({_id:req.params.postId})
  .populate("postedBy","_id")
  .exec((err,post)=>{
      if(err || !post){
          return res.status(422).json({error:err})
      }
      if(post.postedBy._id.toString() === req.userID._id.toString()){
            post.remove()
            .then(result=>{
                res.json(result)
            }).catch(err=>{
                console.log(err)
            })
      }
  })
})


module.exports = router;