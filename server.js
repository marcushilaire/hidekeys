// Requiring our npm packages
require("dotenv").config();
var fs = require("fs");

// Requiring the API object from keys.js
var keys = require("./keys.js");

var apiKey = keys.API.apiKey;
var appID = keys.API.appID;

console.log(apiKey); // 1234
console.log(appID); //5678
