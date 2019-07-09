 let EmailModel= require("../models/email")
 const express= require("express")
 const server = express.Router()


//insert data into mongo db
server.post("/insert",(req,res,next)=>{
  
  let inserted_email= {email:req.body.email}
  if(req.body.length>0){
    EmailModel.create(inserted_email)
  .then(data=>{
    if(data){
      res.send("inserted")
    }else{
      res.send("errrrrrr")
    }
  })
  .catch(err=>{
    console.log(err)
  })
  }
  
})

server.get("/get",(req,res,next)=>{
  EmailModel.find()
  .then(data=>{
    res.send(data)
  })
})


server.post("/del",(req,res,next)=>{
  EmailModel.deleteOne({email:""})
  .then(data=>{
    res.send("deleted")
  })
})


 server.post("/upd",(req,res,next)=>{
  EmailModel.updateOne({email:""},{$set:{email:""}})
  .then(data=>{
    res.send("updated")
  })
})

  server.post("/upd2/:email",(req,res,next)=>{
  EmailModel.findOne({email:req.params.email})
  .then(dat=>{
    dat.email="wedfghj@l.m"
    dat.save()
    res.send("updated")
  })
  .catch(err=>{
    console.log(err)
  })
})

module.exports= server