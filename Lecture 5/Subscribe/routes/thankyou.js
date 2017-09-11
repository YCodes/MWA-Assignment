var express = require('express');
var router = express.Router();

// Get subscribe form
router.post('/',function(req, res, next){
    res.render('thankyou');
});

module.exports = router;