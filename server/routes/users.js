var express = require('express');
var router = express.Router();

var user = require('../models/users.js');



/* GET home page. */
/* end point will be http://localhost:8090/users*/

router.get('/', function(req, res, next) {
  res.send('<p>hello <br> USers</p>');
});


/* to give info to server about user */

/* end point is http://localhost:8090/users/login?user=value&pass=value */

router.post('/login',function(req,res,next) {
	// body...
	var newLogin = new user({
	username: req.query.user,
	password: req.query.pass
	});

	/*
	username = req.query.user;
	password = req.query.pass;

	res.send('<h1>username is :- '+username+'</h1><h2>Password is :- '+password+'</h2>');*/
	newLogin.save(function(err){
		if(err) throw err;

		res.send('User Saved Successfully');
	})
});

module.exports = router;
