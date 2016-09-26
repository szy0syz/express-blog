var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




/* GET szy page. */
router.get('/szy', function(req, res, next) {
  res.send('My name is szy ~.~');
});

module.exports = router;
