var mongoose = require('mongoose');
var schema = mongoose.Schema;

//mongoose.connect('mongodb://localhost:27017/mydb');

var newsSchema = new schema({
	author: String,
	title: String,
	url: String,
	description: String,
	urlToImage: String,
	publishedAt: String,
	comment: String
});

var news = mongoose.model('news',newsSchema);

module.exports = news;