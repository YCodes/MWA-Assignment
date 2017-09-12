var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/test',function(err, db){
    if(err) throw err;
    db.collection('homework7').findOne({},function(err, doc){
        if(err) throw err;
        console.log(doc.message);
        db.close();
        
    });
    console.dir("Called findOne!");
});