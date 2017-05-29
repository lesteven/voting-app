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
				//req.session.save(function(err){
				//	if(err){return next(err);}
					res.redirect('/reglog');
				//})
			});
		});
});

userRouter.route('/login')
/*
.post(function(req,res){
	User.authenticate()(req.body.username, req.body.password, function (err, user, info) {
        //if (err) return next(err);
        if (!user) {
            res.json({err: info});
        } 
        else {
       	  console.log(req.body.username)
          res.redirect('/');
        }
    });
});
*/

.post(passport.authenticate('local',
	{
		successRedirect : '/',
		failureRedirect: '/reglog'
}));

module.exports = userRouter;