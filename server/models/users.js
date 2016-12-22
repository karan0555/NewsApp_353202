var mongoose = require('mongoose');
var schema = mongoose.Schema;

//mongoose.connect('mongodb://localhost:27017/mydb');

var usersSchema = new schema({
	username: String,
	email: String,
	age: Number,
	password: String
});

var user = mongoose.model('user',usersSchema);

module.exports = user;