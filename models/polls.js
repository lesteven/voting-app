var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Poll = new Schema({
	user:{type:String, required:true},
	title:{type:String, required:true},
	options:{type:[], required:true},
	votes:{type:[],required:true},
	colors:{type:[],required:true},
	voters:{type:[]}
},{
	timestamps:true
})

module.exports = mongoose.model('Poll',Poll)