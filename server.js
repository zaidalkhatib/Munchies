const express = require("express");
const app = express();
const db = require("./database.js");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var cors = require("cors");
app.use(cors());
const path = require("path");
app.post("/reviews/:name", (req, res) => {
  const name = req.params.name;
  const { review, rating } = req.body;
  const data = [name, review, rating];
  let inserSql = `INSERT INTO comments (name,review,rating) VALUES (?)`;
  db.query(inserSql, [data], (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    } else {
      console.log("DSadsa");
      res.sendStatus(200);
      console.log(results);
    }
  });
});
setInterval(function () {
  db.query("SELECT 1");
}, 5000);
app.get("/reviews/:name", (req, res) => {
  const name = req.params.name;
  let getSql = `SELECT * FROM comments where name="${name}"`;
  db.query(getSql, (err, results) => {
    if (err) {
      res.sendStatus(500);
      console.log(err);
    } else {
      console.log(results);
      res.send(results);
    }
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});
