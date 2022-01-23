const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title : String,
    tags : [String],
    price : Number,
    slug : {
        type : String, 
        lowercase: true ,
    },
})

const productModel = mongoose.model('productModle', productSchema)

module.exports = productModel