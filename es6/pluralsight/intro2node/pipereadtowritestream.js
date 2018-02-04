const request = require('request');
const fs = require('fs');
const zlib = require('zlib');

// const s = request('http://www.pluralsight.com/');
// s.pipe(process.stdout);

// OR

request('http://www.pluralsight.com/').pipe(process.stdout);

// write to file - writeable stream
// request('http://www.pluralsight.com/').pipe(fs.createWriteStream('pluralsight.html'));

// write to gzip then file - readable stream ~> rw stream(gzip) ~> writeable stream
request('http://www.pluralsight.com/').pipe(zlib.createGzip()).pipe(fs.createWriteStream('pluralsightzipped.html.gz'));

