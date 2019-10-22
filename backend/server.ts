import * as express from "express";
import * as mysql from "mysql";
import { routes } from "./routes/routes";
const app = express();
export {con as con };

const con = mysql.createPool(
    {
      // host: "localhost",
      // user: "root",
      // password: "firewall",
      // database: "f8bnYQb0mF",
        connectionLimit : 10,
        database: "f8bnYQb0mF",
        host: "remotemysql.com",
        password: "lHmHQYEKZG",
        user: "f8bnYQb0mF",
        // idleTime
    }
);

app.listen(4000, "127.0.0.1", () => {
  console.log("express server is listening on 4000 port!!");
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, DELETE");
  if ("OPTIONS" === req.method) {

     res.sendStatus(200);
  } else {
      console.log( "debug message: url- " + req.url + " ip- " + req.ip + " method- " + req.method);
      next();
  }
});
app.use(express.json());
app.use("/", routes);
