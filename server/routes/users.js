var express = require('express');
var router = express.Router();

var user = require('../models/users.js');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var connectflash = require('connect-flash');


/* GET home page. */
/* end point will be http://localhost:8090/users*/

router.get('/', function(req, res, next) {
  res.send('<p>hello <br> USers</p>');
});


/* to give info to server about user */

/* end point is http://localhost:8090/users/login?user=value&pass=value */

router.post('/register',function(req,res,next) {
	// body...
	var newUser = new user({
	username: req.body.username,
	email: req.body.email,
	age: req.body.age,
	password: req.body.password
	});

	/*
	username = req.query.user;
	password = req.query.pass;

	res.send('<h1>username is :- '+username+'</h1><h2>Password is :- '+password+'</h2>');*/
	newUser.save(function(err){
		if(err){ 
			console.log(err);
		} 
		res.send('User Saved Successfully');
	})
});

router.get('/view',function(req,res){
	user.find({},function(err,user){
		if(err) throw err;
		res.send(user);
	});
});

router.post('/login',
	passport.authenticate('local',{failureRedirect: '/users/login'}),
	function(req,res){
		console.log("HELLO FROMM LOGIUN ROUTE");
	res.send('Welcome to login');
});

module.exports = router;
