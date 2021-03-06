var express = require('express');
var router = express.Router();

var news = require('../models/news.js');

/* GET home page. */
/* endpoint is http://localhost:8080/news/getNews */
router.get('/getNews',isLoggedIn, function(req, res, next) {
	// Find all movies.
	news.find({},function(err, newsDemo){
		if (err) throw err;
		res.send(newsDemo);
	});

});


//end point is http://localhost:8080/news/save 
router.post('/save',isLoggedIn,function(req,res,next){
	//body
	/*
	//reading title key of json object
	title = req.body.title;

	//reading description key of json object
	description = req.body.description;

	//reading url key of json object
	url = req.body.url;

	//reading comment key of json object
	comment = req.body.comment;
	*/
	var newNews = new news({
		title: req.body.title,
		description: req.body.description,
		urlToImage: req.body.urlToImage,
		author: req.body.author,
		publishedAt: req.body.publishedAt,
		url: req.body.url,
		comment: "This is Comment"
	})

	newNews.save(function(err){
		if(err) throw err;

		res.send('News Saved Successfully');
	})

	//res.send("HELLO");

});

//end point is http://localhost:8096/news/update 
router.put('/update/',isLoggedIn,function(req,res,next){
	/*//body

	//reading author key of json object
	author = req.body.author;

	//reading title key of json object
	title = req.body.title;

	//reading description key of json object
	description = req.body.author;
	res.send(author);
	*/
	console.log("COMMENTS IS "+req.body.comments);
	news.findByIdAndUpdate(req.body._id, {comment:req.body.comments}, function(err, news) {
		if (err) throw err;

  // we have the updated user returned to us
  res.send("NEWS UPDAted successfully");
});
});

//end point is http://localhost:8080/news/delete 
router.delete('/delete/',isLoggedIn,function(req,res,next){
	/*//body

	//reading author key of json object
	author = req.body.author;

	//reading title key of json object
	title = req.body.title;

	//reading description key of json object
	description = req.body.author;

	res.send(author);*/

	news.findByIdAndRemove(req.body._id, function(err) {
  if (err) throw err;

  // we have deleted the user
  res.send("news DELETED");
});
});

function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
			console.log('logged in');
			return next();
		}
	else{
		res.join("login before operation");
	}

	}

module.exports = router;
