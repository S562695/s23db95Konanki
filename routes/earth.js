var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('earth', { title: 'Search Results by earth '});
});

module.exports = router;
