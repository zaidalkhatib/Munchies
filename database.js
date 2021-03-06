const mysql = require('mysql');
const dotenv= require("dotenv");
dotenv.config({path: "./.env"});
var db= mysql.createConnection({
  host     : "us-cdbr-east-03.cleardb.com", 
  user     : 'b27ce5ee49df05',
  password : "065e38c1",
  database: "heroku_e235ac938561446",
  multipleStatements:true
});


db.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + db.threadId);
});

module.exports=db;