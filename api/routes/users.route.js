const userRouter = require("express").Router()
const User = require("../models/User")
const { registerValidation,loginValidation } = require("../../validation")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

userRouter.post('/register', async (req,res) =>{

    const { error }  =registerValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    const exitEmail = await User.findOne({email: req.body.email})
    if(exitEmail) return res.status(400).send("Email is already exists")

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password,salt)

    const user = new User({
        names:req.body.names,
        email:req.body.email,
        password:hashPassword
    })
    try{
        const savedUser = await user.save()
        res.send(savedUser)
    }catch (err){
        res.status(400).send(err)
    }
});

userRouter.post("/login", async (req, res) =>{

    const { error } =await loginValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    //Check if user exist
    const user = await User.findOne({email: req.body.email})
    if(!user) return res.status(400).send("Email doesn't exist")

    const validPass = await bcrypt.compare(req.body.password,user.password)
    if(!validPass) return res.status(400).send("Invalid password")

    //create Token
    const token = jwt.sign({_id:user._id, email:user.email}, process.env.TOKEN_SECRET)
    res.header("auth-token",token).send({token:token})
})
module.exports = userRouter