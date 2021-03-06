const express = require("express");
const app = express(); 
const db =  require("./database.js");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
var cors = require('cors')
app.use(cors())
const path= require("path");
app.post("/rating",(req,res)=>
{
  const {barCode,description,rating}=req.body;
  const data=[barCode,description,rating];
  let inserSql = `INSERT INTO comments (barCode,description,rating) VALUES (?)`;
      db.query(inserSql,[data],(err,results)=>
      {
        if(err)
        {
          console.log(err);
          return res.status(500).send(err);
        }
        else 
        {
        console.log("DSadsa");
          res.sendStatus(200);
          console.log(results);
        }
      });
});


app.get("/rating/:barCode",(req,res)=>
{
  const barCode = req.params.barCode;
  let getSql = `SELECT * FROM comments where barCode=${barCode}`;
  db.query(getSql,(err,results)=>
  {
    if(err)
    {
      res.sendStatus(500).send("error getting data",err);
    }
    else
    {
      console.log(results);
      res.send(results);
    }
  })
});

if(process.env.NODE_ENV==="production")
{
  app.use(express.static("client/build"));
  app.get("*",(req,res)=>res.sendFile(path.resolve(__dirname,"client","build","index.html"))); 
}
const PORT =process.env.PORT||4000;
app.listen(PORT,()=>
{
  console.log(`running on ${PORT}`); 
})