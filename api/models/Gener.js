const mongoose = require("mongoose")
const genreSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        unique:true
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
module.exports = mongoose.model('Geners',genreSchema)