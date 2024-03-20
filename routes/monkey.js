var express = require('express');
var router = express.Router();

console.log("Hitting the index wow!!!!!!!")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Arrived at Monkeys!');
});

router.get('/:username', function(req, res, next) {
    console.log("These are params =====>", req.params)
    res.json(req.params)
});

module.exports = router;