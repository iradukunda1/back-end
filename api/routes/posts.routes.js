const postRouter = require("express").Router();
const Post = require("../models/Post")

//Find All Posts
postRouter.get( "/posts",  async (req,res) => {
   try{
       const datas = await Post.find()
       res.status(200).json(datas)
   }catch (err){
       res.json({ message:err})
   }
})

//Get One Post
postRouter.get( "/posts/:postId",  async (req,res) => {
    try{
        const post = await Post.findById(req.params.postId)
        res.status(200).json(post)
    }catch (err){
        res.json({ message:err})
    }
})

postRouter.post('/posts',async (req,res) => {
    const post = new Post(req.body)
    try{
        const data = await post.save()
        res.status(200).json(data)
    }catch (err){
        res.json({message:err})
    }
})

//delete Post
postRouter.delete( "/posts/:postId",  async (req,res) => {
    try{
        const post = await Post.deleteOne({_id: req.params.postId})
        res.json({message:'Deleted Successfully'})
    }catch (err){
        res.json({ message:err})
    }
})

//Update Post
postRouter.patch( "/posts/:postId",  async (req,res) => {
    const postId =  req.params.postId
    const {title,description} = req.body
    try{
        const updatedPost = await Post.updateOne({_id:postId},{$set:{title}})
        res.json({message:'Updated Successfully'})
    }catch (err){
        res.json({ message:err})
    }
})

module.exports = postRouter