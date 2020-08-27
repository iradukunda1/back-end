const bookRouter = require("express").Router()
const Book = require("../models/Book.js")
const verify = require("../../verifyToken")

bookRouter.get( "/books",verify, async(req,res) => {
    try{
        const datas = await Book.find()
        res.status(200).json(datas)
    }catch (err){
        res.json({ message:err})
    }
})

//Get One book
bookRouter.get( "/books/:bookId", verify, async (req,res) => {
    try{
        const book = await Book.findById(req.params.bookId)
        res.status(200).json(book)
    }catch (err){
        res.json({ message:err})
    }
})
bookRouter.post('/books',verify,async (req,res) =>{
    const book = new Book(req.body)
    try{
        const data = await book.save()
        res.status(200).json(data).message('Successfully Created')
    }catch (err){
        res.json({message:err})
    }
})

//delete book
bookRouter.delete( "/books/:bookId", verify, async (req,res) => {
    try{
        const book = await Book.deleteOne({_id: req.params.bookId})
        res.json({message:'Deleted Successfully'})
    }catch (err){
        res.json({ message:err})
    }
})

//Update book
bookRouter.patch( "/books/:bookId", verify, async (req,res) => {
    const bookId =  req.params.bookId
    const update = {
        title:req.body.title,
        genre:req.body.genre,
        description:req.body.description,
        author:req.body.author,
        publisher:req.body.publisher,
        image_url:req.body.image_url,
        update_date:Date.now()
    }
    try{
        const updatedbook = await Book.updateOne({_id:bookId},{$set:update})
        res.json({message:'Updated Successfully'})
    }catch (err){
        res.json({ message:err})
    }
})
module.exports = bookRouter
