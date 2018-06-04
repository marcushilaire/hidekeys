require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");
// importing the API object from keys.js

var apiKey = keys.API.apiKey;
var appID = keys.API.appID;

console.log(apiKey); // 1234
console.log(appID); //5678
