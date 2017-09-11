var express = require('express');
var fs = require('fs');
var router = express.Router();

// Get subscribe form
router.get('/',function(req, res, next){
    res.render('newsletter',{title: 'NewMail Subscription'});
});

router.post('/',function(req, res, next){
    fs.appendFile('subscribers.txt', "\r\n"+req.body.subscribe_email, (err) => {
        if (err) throw err;
      });
    //res.redirect('thankyou');
   res.render('thankyou',{title: 'NewMail Subscription', email: req.body.subscribe_email});
});


module.exports = router;