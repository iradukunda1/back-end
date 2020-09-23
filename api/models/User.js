const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    names:{
        type:String,
        min:6,
        unique:true,
        required:[true, "Names is required"],
        max:255
    },
    email:{
        type:String,
        trim:true,
        lowercase:true,
        required: [true, "Email is required"],
        max:255,
        min:6
    },
    password:{
        type:String,
        select:false,
        required:[true, "Password is required"],
        max:1024,
        min:6
    },
    confirmed:{
        type:Boolean,
        default:false
    },
    date:{
        type:Date,
        default:Date.now()
    },
    createdAt:{
        type:Date,
        default: Date.now()
    },
    update_date:{
        type:Date,
        default:null
    }
})

module.exports = mongoose.model('Users',userSchema)