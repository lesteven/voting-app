var express = require('express');

var mongoose = require('mongoose');
var pollRouter = express.Router();
var Polls = require('../models/polls')
var path = require('path');

//pollRouter.use('/*', express.static(path.join(__dirname, '../public/pollChart.html')));


pollRouter.post('/',function(req,res){
	//console.log(req.user.username)
	var arrTitles = turnToArray(req.body.options);
	var genData = generateData(arrTitles);
	var colorArray = genColorArray(arrTitles);
	var pollData =({
		user: req.user.username,
		title:req.body.title,
		options:arrTitles,
		votes: genData,
		colors: colorArray,
		voters:[]
	})
	Polls.create(pollData,function(err,poll){
		if(err) throw err;
		//console.log('poll created',poll,poll._id);
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
.post(function(req,res,next){
	//console.log('req.params',req.params.pollID)
	//console.log(req.body)
	Polls.findById(req.params.pollID,function(err,poll){
		if(err) return handleError(err);
		//console.log(req.body)
		var index = Number(req.body.vote)
		if(!req.body.vote || req.body.vote ===''){
			next()
		}
		else if(isNaN(index)){
			var status = addUser(req,poll);
			//console.log(status)
			if(status){
				poll.options.push(req.body.vote);
				poll.votes.push(1);
				var color = genColor();
				poll.colors.push(color);
				poll.markModified('options')
				poll.markModified('votes')
				poll.markModified('colors')
				poll.save();
			}
		}
		else{
			var status = addUser(req,poll)
			if(status){
				poll.votes[index] +=1;
				poll.markModified('votes');
				poll.save();
			}
		}
		res.redirect('/')
	})
})
.delete(function(req,res){
	//res.send('will delete '+ req.params.pollID)
	Polls.findByIdAndRemove(req.params.pollID,function(err,resp){
		if(err) throw err;
		res.redirect('/');
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
  	//var randomNum = Math.ceil(Math.random()*5)
    arrData.push(0)
  }
  return arrData;
}
function genColor(){
  var letters = '0123456789abcdef';
  var color = '#';
  for(var i = 0; i <6; i++){
    color += letters[Math.floor(Math.random()*letters.length)]
  }
  return color; 
}
function genColorArray(arr){
  var colorArray = [];
  for(var i = 0; i < arr.length;i++){
    var color = genColor();
    colorArray.push(color)
  }
  return colorArray;
}
function addUser(req,poll){
	var voters = poll.voters;
	if(req.user){
		var index = voters.indexOf(req.user.username)
		//console.log(poll.voters,index,req.user.username)
		if(index === -1){
			poll.voters.push(req.user.username);
			poll.markModified('voters');
			//console.log('added voter')
			return true;
		}
		else{return false}
	}
	else{
		var ip = req.headers['x-forwarded-for'];
		var index = poll.voters.indexOf(ip)
		if(index === -1){
			poll.voters.push(ip);
			poll.markModified('voters');
			//console.log('no user!',ip)
			return true;
		}
		else{return false}
	}
}
module.exports = pollRouter;