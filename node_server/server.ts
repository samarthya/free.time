import * as express from 'express';
import * as mysql from 'mysql';
import {routes} from  './routes/routes';
//import * as cors from 'cors';
const app = express();
export {con as con };

var con= mysql.createPool(
    {
        host: "remotemysql.com",
        user: "f8bnYQb0mF",
        password: "lHmHQYEKZG", 
        database: "f8bnYQb0mF",
        connectionLimit : 10
    }
);

app.listen(4000,'127.0.0.1',function(){
  console.log('express server is listening on 4000 port!!')
});
//app.use(cors);

/*options for cors midddleware
const options:cors.CorsOptions = {
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token","Authorization"],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: "http://localhost:4200",
  preflightContinue: false
};

//use cors middleware
app.use(cors(options));

//enable pre-flight
app.options("*", cors(options));
*/

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
  if('OPTIONS' == req.method) {
      
     res.sendStatus(200);
  } else {
      console.log( 'debug message: url- ' + req.url +' ip- ' +req.ip +' method- ' +req.method);
      next();
  }
})
app.use(express.json());
app.use('/', routes);
