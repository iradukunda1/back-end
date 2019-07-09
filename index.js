const express = require ('express');
//create express instance
const app = express();
//create body parses instance
const bodyParser = require("body-parser")
//create cors instance
const  cors = require("cors")
const bcrypt= require("bcrypt")
const jwt =require("jsonwebtoken")
const mongoose=require('mongoose');
const reset = require("./api/controllers/reset.js")
const testController =require("./api/controllers/testController.js")


//middleware
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
app.use("/data",reset)
app.use("/test", testController)


const conn=mongoose.connect("mongodb://localhost:27017/test",{useNewUrlParser:true})
.then(()=>{
	console.log("connected")
})
.catch((err)=>{
	console.log("not connected, " +err)
})

const port =process.env.PORT || 5000;
app.listen(5000, () => console.log("listening on port: "+port));