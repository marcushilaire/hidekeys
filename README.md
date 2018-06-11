# Keeping API keys private

### Initialization

Run `npm init -y` to automatically set up the package json with default options.

Run `npm i --s dotenv` to install dotenv and add it to dependencies in the [package.json](package.json). This package will allow us to manipulate environment variables in development that can be accessed in the form `process.env<variableName>`.

### [.gitignore](.gitignore) and [.env](.env)

Create a [.gitignore](.gitignore) file. This will specify the files/folders that should not be tracked by git. It should look something like this:

```
node_modules
.env
.DS_Store
```

- Note: This branch of the tutorial is meant to show the .env so it is not included in the .gitignore

Environment variables are defined in the .env with simple key value pairs in the form:

```
key = 1234
appID = 5678
```

### Accessing the environment variables

The environment variables can be referenced through the `process.env` object. for example:

```js
var apiKey = process.env.key;
var apiID = process.env.appID;

console.log(apiKey); //1234
console.log(apiID); //5678
```

[keys.js](keys.js)
export from keys.js

reqire dotenv and fs

```js
require("dotenv").config();
var fs = require("fs");
```

and import keys from
