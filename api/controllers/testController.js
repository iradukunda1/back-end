 let test= require("../models/test")
 const express= require("express")
 const data = express.Router()
 
 data.post('/enter', (req,res,next)=>{
 	let inserted_data= req.body
  test.create(inserted_data)
  .then(data=>{
    if(data){
      res.send("success")
    }else{
      res.send("errrrrrr")
    }
  })
  .catch(err=>{
    res.send(err)
  })
 })
 data.post("/update",(req,res)=>{
 	test.findOneAndUpdate({_id:req.body.id},{$set:{name:req.body.newName}})
 	.then(r=>{
 		if(r){
 			res.send("updated")
 		}else{
 			res.send("nooo")
 		}
 	})
 	.catch(e=>{
 		console.log(e)
 	})
 })
 data.get("/get",(req,res,next)=>{
  test.find()
  .then(data=>{
    res.send(data)
  })
})
 data.post("/del",(req,res)=>{
  	test.deleteOne({_id:req.body.id})
 	.then(data=>{
 		if(data){
 			res.send("deleted")
 		}else{
 			res.send("blah blah blah")	
 		}
 	})
 	.catch(err=>{
 		console.log(err)
 	})
 })
 module.exports= data