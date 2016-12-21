var express = require('express');
var router = express.Router();
var user = require('../models/users.js');

router.post('/',fundtion(req,res){
	var newUser = new user();
	newUser.username = req.body.username;
	newUser.password = req.body.password;

	newUser.save();
		res.send("inserted");
});

module.export = router;