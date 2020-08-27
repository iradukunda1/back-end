const express = require ('express');
//create express instance
const app = express();
const routes = require("./api/routes")
//create body parses instance for convert req into json
const bodyParser = require("body-parser")
//create cors instance used as middleware for allow our api to be used for on different domains
const  cors = require("cors")
// const bcrypt= require("bcrypt")
// const jwt =require("jsonwebtoken")
const mongoose=require('mongoose');
// const reset = require("./api/controllers/reset.js")
// const testController =require("./api/controllers/testController.js")
require("dotenv/config")
//
//
// //middleware
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
// app.use("/data",reset)
// app.use("/test", testController)
//

//router with middleware of routes
app.use('/api', routes);
app.get('/',(req,res) =>{
    res.send('We are alive')
})


//Connecting to MongoDB data base
mongoose.connect(process.env.BD_CONNECTION, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex:true
})
const db = mongoose.connection
db.once('open', _ => {
    console.log('Database connected:', process.env.BD_CONNECTION)
})

db.on('error', err => {
    console.error('connection error:', err)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>
    process.env.NODE_ENV === 'development' &&
    console.log(`Listening on port ${PORT}`)
)


