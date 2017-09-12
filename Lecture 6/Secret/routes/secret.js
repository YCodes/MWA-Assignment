var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

const crypto = require('crypto');

function decrypt(text){
    const decipher = crypto.createDecipher('aes256','asaadsaad');
    var result = decipher.update(text,'hex','utf-8');
    result += decipher.final('utf-8');
    return result;
  }

/* GET users listing. */
router.get('/', function(req, res, next) {

    MongoClient.connect('mongodb://127.0.0.1:27017/test',function(err, db){
        if(err) throw err;
        db.collection('homework7').findOne({},function(err, doc){
            if(err) throw err;
            decryptedmsg = decrypt(doc.message);
            db.close();
            res.render('result', { title: 'Result Page', message: decryptedmsg });
            
        });
      }); 
});

module.exports = router;