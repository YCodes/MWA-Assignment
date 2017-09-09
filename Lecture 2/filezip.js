var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();
var readable = fs.createReadStream('./mypic.jpg');

var gunzip = zlib.createGunzip();

var writable = fs.createWriteStream('./mypic2.jpg');

readable.pipe(gzip).pipe(gunzip).pipe(writable);