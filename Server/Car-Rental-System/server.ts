import express from 'express';
import aluguelRouter from './src/routes/aluguel.routes';
import carRouter from './src/routes/car.routes'
import feedbackRouter from './src/routes/feedback.routes';

const server = express();
const port = 3000;

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "http://localhost:4200");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, HEAD, PATCH');
    res.header('Access-Control-Allow-Headers', 'X-Request-With, content-Type');
    next();
  }
  
server.use(allowCrossDomain);
server.use(express.json());
server.use('/car', carRouter);
server.use('/feedback', feedbackRouter);
server.use('/rent', aluguelRouter);

server.listen(port, () => {
    console.log('Server listening on port ' + port);
});