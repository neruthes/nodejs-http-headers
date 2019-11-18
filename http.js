const http = require('http');

http.createServer(function (req, res) {
    console.log(req);
    // res.write('200', {test:10086})
    res.write(JSON.stringify(req.headers));
    res.end();
}).listen('8122');
