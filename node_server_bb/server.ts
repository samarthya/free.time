import * as express from 'express';
import * as mysql from 'mysql';
//import * as bodyparser from 'body-parser';
//import { IPrincipal, IUserProfile, IUser, IDetails } from './models/usermodel';
import {routes} from  './routes/routes';
//import * as cors from 'cors';
const app = express();
export {con as con };
//app.use(cors());
  
//var con= mysql.createConnection(
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

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
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
/*
app.use('/',(req,res)=>{
  res.send([{ message: 'hello world' }]);
})
*/
//app.use('/',index);
//app.use('/routes',routes);
