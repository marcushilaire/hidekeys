require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();
// importing the API object from keys.js
var PORT = process.env.PORT || 8080;

var apiKey = keys.API.apiKey;
// var appID = keys.API.appID;
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  //   res.send(apiKey);
  console.log("loading home");
  res.sendFile(path.join(__dirname, "./index.html"));
  console.log(__dirname);
});
app.get("/apiKey", function(req, res) {
  console.log("api key requested");
  res.status(200).send(apiKey);
});
// console.log(apiKey); // 1234
// console.log(appID); //5678
app.listen(PORT, function() {
  console.log("Server Running");
});
