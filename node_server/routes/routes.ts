import * as express from 'express';
import { con } from '../server';
import { IUserProfile, IDetails, IUser, IPrincipal } from '../../front-end/src/app/models/user.model';
const app = express.Router();
let up: IUserProfile;

export { app as routes };

//to search and show user details
app.use('/login', (req, res) => {
  con.getConnection(function (err1, connection) {
    if (err1) {
      console.log(' Error getting mysql_pool connection: ' + err1);    }
    else {  
      console.log('got GET input as ' + JSON.stringify(req.body));
      let sql = "SELECT `name`,`lastName`,`imageUrl` FROM `userprofile` where email='" + req.body.email + "'"+"AND password='" + req.body.password + "'";
      //console.log(sql);
      connection.query(sql, function (err, result1) {
        //connection.release();
        if (err) {
          console.log(JSON.stringify(err));
        }
        else if(!result1)
        {
          console.log("No such user exists!!");
          //res.send(err);
        }
        else {
          console.log('login result(up.profile): ' + JSON.stringify(result1));
          //res.send(result1);
          result1.join(',');
          sql="SELECT `subToEmail`,`gitProfile`,`googleProfile`,`description` FROM `userprofile` where email = '" + req.body.email + "'"+"AND password='" + req.body.password + "'";
          connection.query(sql, function (err, result2) {
            connection.release();
            if (err) {
              console.log(JSON.stringify(err));
            }
            else if(!result2)
            {
              console.log("No such user exists!!");
              //res.send(err);
            }
            else {
              console.log('login result(up.details): ' + JSON.stringify(result2));
             up = {
               user: req.body ,
               profile: result1[0],
               details: result2[0]
              }
              res.send(up);
            }
          })
        }
       })
      }
  })
})

/*
//To delete a record
app.delete('/delete/:email', (req, res) => {
  con.getConnection(function (err1, connection) {
    if (err1) {
      console.log(' Error getting mysql_pool connection: ' + err1);
      //connection.release();
    }
    else {
      connection.query("DELETE FROM `user` where `email` = ?", [req.params.email], function (err, result, fields) {
        console.log('\nemail is ' + req.params.email);
        connection.release();
        if (err) {
          console.log(JSON.stringify(err));
        }
        else
          res.send('Record deleted succesfully!!');
        //console.log(rows[2].email);
      })
    }
  })
})

//To insert a record
app.post('/add', (req, res) => {
  let user = req.body;
  let email = user.email;
  let password = user.password;
  var sql = "INSERT INTO `user` (`email`, `password`) VALUES (?, ?)";
  con.getConnection(function (err1, connection) {
    if (err1) {
      console.log(' Error getting mysql_pool connection: ' + err1);
      //connection.release();
    }
    else {
      connection.query(sql, [email, password], function (err, result, fields) {
        connection.release();
        console.log('\nemail is ' + email);
        if (err) {
          console.log(JSON.stringify(err));
        }
        else
          res.send(' Record added succesfully!!');
      })
    }
  })
})

//To update a record
app.put('/update',(req,res)=>{
  let user= req.body;
  let email = user.email;
  let password = req.password;
  var sql = "UPDATE `user` SET `password` = ? WHERE `user`.`email` = ? ";
  con.query(sql,[password,email],function(err,result,fields){
      console.log('\nemail is ' + email);
      if(err)
        console.log(JSON.stringify(err));
      else
        res.send(' Record added succesfully!!');
  })
})
*/
