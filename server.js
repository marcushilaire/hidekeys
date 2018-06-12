// Requiring our npm packages
require("dotenv").config();
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var fs = require("fs");

//Requiring the api object from keys.js
var keys = require("./keys.js");
var apiKey = keys.API.apiKey;

// Initializing Express and file structuer
var app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setting up our server to run on the port defined by our deployment host or  localhost:8080
var PORT = process.env.PORT || 8080;

// Setting up a get route at home route to display index.html
app.get("/", function(req, res) {
  console.log("loading home, index.html");
  res.sendFile(path.join(__dirname, "/index.html"));
});

// Setting up a route to send apiKey from the server to the client
app.post("/apiKey", function(req, res) {
  console.log("api key requested");
  res.status(200).send(apiKey);
  // .redirect("/");
});

// Starting the server on the previously define PORT
app.listen(PORT, function() {
  console.log("Server running on port:", PORT);
});
