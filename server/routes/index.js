var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<p>hello <br> Bye</p>');
});


module.exports = router;