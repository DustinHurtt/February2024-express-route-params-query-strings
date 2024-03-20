var express = require('express');
var router = express.Router();

console.log("Hitting the index wow!!!!!!!")

/* GET home page. */
router.get('/users', function(req, res, next) {
  res.send('Arrived at the index Users');
});

module.exports = router;
