var express = require("express");

var router = express.Router();


// Create all our routes and set up logic within those routes where required.
router.get('/', function(req, res) {
  res.render('home')
})

/*
router.get('/scrape', function(req, res) {
  res.render('scrape')
})

*/


/*

router.get('/portfolio', function(req, res) {
  res.render('portfolio')
})

router.get('/contactme', function(req, res) {
  res.render('contactme')
})
*/



// Export routes for server.js to use.
module.exports = router;
