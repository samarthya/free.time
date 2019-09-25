import * as express from 'express';
import {con} from '../server';

const app = express.Router();

export { app as routes };

//To show all users
app.get('/show',(req,res)=>{
    con.getConnection(function(err1, connection) {
    if (err1) {
        console.log(' Error getting mysql_pool connection: ' + err1);
        //connection.release();
      }
    else {
        connection.query("SELECT * FROM `user`",function(err,result,fields){
        connection.release();
        if(err) 
        {
          console.log('error in /show query' + JSON.stringify(err));
        }
        else
        {
         // console.log('query done'+ JSON.stringify(result));
          res.send(JSON.stringify(result));
          //console.log(rows[2].email);
        }
    })   
    }
    })
  })

  //To insert a record
app.post('/add',(req,res)=>{
  let userProfile req.body;   
  let email = userProfile.user.email;
  let password = userProfile.user.password;
  let name = userProfile.profile.name;
  let lastName = userProfile.profile.lastName;
  let imageUrl = userProfile.profile.imageUrl;
  let subToEmail = userProfile.details.subToEmail;
  let gitProfile = userProfile.details.gitProfile;
  let googleProfile = userProfile.details.googleProfile;
  let description = userProfile.details.description;
  
  var sql = "INSERT INTO `user` (`email`, `name`, `lastName`,`password`,`imageUrl`,`subToEmail`,`gitProfile`,`googleProfile`,`description`) VALUES (?,?,?,?,?,?,?,?,?)";
  con.getConnection(function(err1,connection){
    if(err1)
    {
      console.log(' Error getting mysql_pool connection: ' + err1);
      //connection.release();
    }
    else
    {
      connection.query(sql,[email,name,lastName,password,imageUrl,subToEmail,gitProfile,googleProfile,description],function(err,result,fields){
        connection.release();
        console.log('\nemail is ' + email);
        if(err) 
        {
          console.log(JSON.stringify(err));
        }
        else
          res.send(' Record added succesfully!!');
    })
    }
  })
}) 

//to search and show user details
app.get('/login/?user',(req,res)=>{
  let userProfile= req.body;   
  let email = userProfile.user.email;
  let password = userProfile.user.password;
  let sql = "SELECT * FROM `user` where `email` = ? AND `password` = ?";
  con.getConnection(function(err1, connection) {
  if (err1) {
      console.log(' Error getting mysql_pool connection: ' + err1);
      //connection.release();
    }
  else {
      connection.query(sql,[email,password],function(err,result,fields){
      connection.release();
      console.log('\nemail is ' + req.params.email);
      if(err) 
      {
        console.log(JSON.stringify(err));
      }
      else
        res.send(result);
      //console.log(rows[2].email);
  })   
  }
  })
})

//To delete a record
app.delete('/delete/:email',(req,res)=>{
con.getConnection(function(err1,connection){
  if(err1)
  {
    console.log(' Error getting mysql_pool connection: ' + err1);
    //connection.release();
  }
  else{
    connection.query("DELETE FROM `user` where `email` = ?",[req.params.email],function(err,result,fields){
      console.log('\nemail is ' + req.params.email);
      connection.release();
      if(err) 
      {
        console.log(JSON.stringify(err));
      }
      else
        res.send('Record deleted succesfully!!');
      //console.log(rows[2].email);
  })
  }
})
})


/*
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
