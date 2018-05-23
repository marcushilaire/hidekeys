require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");
var random = keys.key.randomKey;

console.log(random);
