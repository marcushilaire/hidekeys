require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");
var apiKey = keys.API.apiKey;
var appID = keys.API.appID;

console.log(apiKey);
console.log(appID);
