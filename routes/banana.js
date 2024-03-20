var express = require('express');
var router = express.Router();

console.log("Hitting the index wow!!!!!!!")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Arrived at the Bananas!');
});

router.get('/coconuts', (req, res, next) => {
    res.send("Now we're at coconuts!!")
})

module.exports = router;