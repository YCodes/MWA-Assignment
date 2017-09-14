var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/restaurants',function(err,db){
var resCollection = db.collection('restaurant');
var cursor = resCollection.find({});
cursor.skip(1);
cursor.limit(4);
cursor.sort('name',1);
cursor.each(function(err,doc){
console.dir(doc);
});
});