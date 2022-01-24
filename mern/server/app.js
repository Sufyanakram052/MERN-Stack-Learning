const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");

dotenv.config({ path : './config.env' });


const Port = process.env.PORT;
app.use(express.json());
require('./db/conn');
require('./models/userSchema')
require('./models/postSchema');


app.use(require('./router/auth'));
app.use(require('./router/post'));
app.use(cookieParser());



// const User = require('./models/userSchema')



app.listen(Port, () => {
    console.log(`Server is running at port ${Port}`);
});
