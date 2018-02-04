# Http

`const http = require('http');`


options can be 
- URL string
- object specifying values for: host, port, method, path, headers, auth, etc...
`const req = http.request(options, res => {
    // process callback
);`

- simplified: `http.get()`