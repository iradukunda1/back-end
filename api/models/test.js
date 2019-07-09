let mongoose = require('mongoose')
mongoose.set('useCreateIndex',true)
mongoose.set('useFindAndModify',false)

let testSchema= new mongoose.Schema({
	name:{
		type:String
	},
	age:{
		type:Number
	},
	status:{
		type:String
	}
})
module.exports = mongoose.model('test', testSchema)