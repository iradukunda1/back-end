const genreRouter = require("express").Router()
const Genre = require("../models/Gener")

genreRouter.get( "/genres",  async (req,res) => {
    try{
        const datas = await Genre.find()
        res.status(200).json(datas)
    }catch (err){
        res.json({ message:err})
    }
})

//Get One genre
genreRouter.get( "/genres/:genreId",  async (req,res) => {
    try{
        const genre = await Genre.findById(req.params.genreId)
        res.status(200).json(genre)
    }catch (err){
        res.json({ message:err})
    }
})
genreRouter.post('/genres',async (req,res) =>{
    const genre = new Genre(req.body)
    try{
        const data = await genre.save()
        res.status(200).json(data)
    }catch (err){
        res.json({message:err})
    }
})

//delete genre
genreRouter.delete( "/genres/:genreId",  async (req,res) => {
    try{
        const genre = await Genre.deleteOne({_id: req.params.genreId})
        res.json({message:'Deleted Successfully'})
    }catch (err){
        res.json({ message:err})
    }
})

//Update genre
genreRouter.patch( "/genres/:genreId",  async (req,res) => {
    const genreId =  req.params.genreId
    const name = req.body.name
    const update_date =  Date.now()
    try{
        const updatedGenre = await Genre.updateOne({_id:genreId},{$set:{name,update_date}})
        res.json({message:'Updated Successfully',updatedGenre})
    }catch (err){
        res.json({ message:err})
    }
})
module.exports = genreRouter