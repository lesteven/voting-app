var express = require('express');
var mongoose = require('mongoose');
var pollRouter = express.Router();
var Polls = require('../models/polls')
var path = require('path');

//pollRouter.use('/*', express.static(path.join(__dirname, '../public/pollChart.html')));

pollRouter.post('/',function(req,res){
	//console.log(req.user.username)
	var arrTitles = turnToArray(req.body.options);
	var genData = generateData(arrTitles)
	var pollData =({
		user: req.user.username,
		title:req.body.title,
		options:arrTitles,
		votes: genData
	})
	Polls.create(pollData,function(err,poll){
		if(err) throw err;
		console.log('poll created',poll,poll._id);
		res.redirect('/mypolls')
	})
});

pollRouter.get('/all',function(req,res){
	Polls.find({})
	.sort('-updatedAt')
	.exec(function(err,poll){
		if(err) throw err;
		res.json(poll);
	})
})

pollRouter.get('/personal',function(req,res){
	Polls.find({user:req.user.username})
	.sort('-updatedAt')
	.exec(function(err,poll){
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
		res.redirect('/')
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
function turnToArray(options){
	var split = options.split(',');
	var arr = split.filter(empty);
	return arr;
}
function generateData(arr){
  var arrData =[];
  for(var i = 0;i< arr.length;i++){
  	var randomNum = Math.ceil(Math.random()*5)
    arrData.push(randomNum)
  }
  return arrData;
}
module.exports = pollRouter;