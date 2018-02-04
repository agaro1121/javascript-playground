const http = require('http');

const options = {
  host: "www.google.com",
  port: 80,
  path: "/",
  method: "GET"
};

console.log("Going to make a request");

/*
* This api does not follow redirects
* npm `request` follows redirects
* */
const request = http.request("http://www.google.com", response => {
    console.log(response.statusCode);
    response.pipe(process.stdout);
});
const request2 = http.request(options, response => {
    console.log(response.statusCode);
    response.pipe(process.stdout);
});

request2.end(); //nothing happens until you invoke this

/*
* Does not require `.end()` because this
* optimized call knows you're not going to
* upload anything after.
* */
http.get(options, response => {
    console.log(response.statusCode);
    response.pipe(process.stdout);
});