import express from 'express';

const server = express();
const port = 3000;

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "http://localhost:4200");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, HEAD, PATCH');
    res.header('Access-Control-Allow-Headers', 'X-Request-With, content-Type');
    next();
  }
  
server.use(allowCrossDomain);

server.listen(port, () => {
    console.log('Server listening on port ' + port);
});