const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    genre:{
        trim: true,
        type:String,
        required: true
    },
    description:{
        trim: true,
        type:String
    },
    author:{
        type:String,
        trim: true,
        required:true
    },
    publisher:{
        type:String
    },
    pages:{
        trim: true,
        type:String,
        required:true
    },
    image_url:{
        trim: true,
        type:String
    },
    buy_url:{
        trim: true,
        type:String
    },
    created_date:{
        type:Date,
        default:Date.now()
    },
    update_date:{
        type:Date,
        default: null
    }
})
module.exports = mongoose.model('Books',bookSchema)