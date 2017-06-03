var express = require('express');
var mongoose = require('mongoose');
var pollRouter = express.Router();
var Polls = require('../models/polls')
var path = require('path');

//pollRouter.use('/*', express.static(path.join(__dirname, '../public/pollChart.html')));

pollRouter.post('/',function(req,res){
	//console.log(req.user.username)
	var obj = turnToObject(req.body.options)
	var pollData =({
		user: req.user.username,
		title:req.body.title,
		options:obj
	})
	Polls.create(pollData,function(err,poll){
		if(err) throw err;
		console.log('poll created',poll,poll._id);
		res.redirect('/polls/' + poll._id)
	})
});

pollRouter.get('/all',function(req,res){
	Polls.find({},function(err,poll){
		if(err) throw err;
		res.json(poll);
	})
})

pollRouter.route('/:pollID')
.get(function(req,res){
	//console.log('req.params',req.params.pollID)
	
	Polls.findById(req.params.pollID,function(err,poll){
		if(err){
			res.json({err:err})
		}
		function hello(){
			return ('hello data!')
		}
		res.send(hello())
	})
})

pollRouter.get('/json/:pollID',function(req,res){
	//console.log('req.params',req.params.pollID)
	Polls.findById(req.params.pollID,function(err,poll){
		if(err) throw err;
		res.json(poll)
	})
})



function empty(value){
	return value !== '';
}
function turnToObject(options){
	var split = options.split(',');
	var arr = split.filter(empty);
	var obj ={}
	for(var i = 0; i < arr.length; i++){
	  obj[arr[i]] = 0
	}
	return obj;
}

module.exports = pollRouter;