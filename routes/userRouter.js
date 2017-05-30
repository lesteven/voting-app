var express = require('express');
var userRouter = express.Router();
var User = require('../models/register');
var passport = require('passport');

userRouter.route('/register')

.post(function(req,res){
	User.register(new User({username:req.body.username}),
		req.body.password, function(err,user){
			if(err){
				return res.status(500).json({err:err});	
			}
			passport.authenticate('local')(req,res, function(){
				console.log(req.user.username)
				res.redirect('/');
			});
		});
});

userRouter.route('/login')
.post(function(req,res,next){
	  passport.authenticate('local', function(err, user, info) {
	    if (err) { return next(err); }
	    if (!user) { return res.redirect('/reglog'); }

	    req.logIn(user, function(err) {
	      if (err) { return next(err); }
	      console.log(user.username)
	      return res.redirect('/');
	    });
	  })(req, res, next);
})

/*
.post(passport.authenticate('local',{successRedirect : '/',failureRedirect: '/reglog'}),
	function(req,res){
	console.log('hello world')
});
*/
userRouter.route('/logout')

.get(function(req,res){
	console.log(req.user)
	req.logOut();
	res.clearCookie('connect.sid');
	res.redirect('/');
	console.log(req.user)
});

module.exports = userRouter;