var express = require('express');
var router = express.Router();
var db = require('../controller/dbController');


/* GET search page. */
router.get('/', function(req, res, next) {
  res.render('search', { title: 'Mongo CRUD - SEARCH', datas: '' });
});

/* POST search page. */
router.post('/', function(req, res, next) {
  var category = req.body.category;
  db.locationdata.find({category:category}).toArray(function(err,items){  
    res.render('search', { title: 'Mongo CRUD - SEARCH', datas: items});

});

});

module.exports = router;