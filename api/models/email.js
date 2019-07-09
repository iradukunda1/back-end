let mongoose= require('mongoose')
mongoose.set('useCreateIndex',true)

let emailschema= new mongoose.Schema({
	email:{
		type:String,
		unique:true,		
	}
},

{runSettersOnQuery:true,toJSON:{virtuals:true}})
emailschema.pre("save",function(next){
	next()
})
module.exports = mongoose.model('email', emailschema)

