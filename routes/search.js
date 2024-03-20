var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', (req, res, next) => {
    console.log("req.query ---------> ", req.query);
 
    res.json(req.query);
});

router.get('/details/:username/particular/:password', function(req, res, next) {
    console.log("These are params =====>", req.params)
    res.json(req.params)
});

module.exports = router;