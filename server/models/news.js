var mongoose = require('mongoose');
var schema = mongoose.Schema;

//mongoose.connect('mongodb://localhost:27017/mydb');

var newsSchema = new schema({
	title: String,
	url: String,
	description: String,
	comment: String
});

var news = mongoose.model('news',newsSchema);

module.exports = news;