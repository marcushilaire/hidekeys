# Hide your API Keys

## This repo follows all steps aside from number two

1.  Navigate to the root of your project and run `npm init -y` &mdash; this will initialize a `package.json` file for your project. The `package.json` file is required for installing third party npm packages and saving their version numbers. If you fail to initialize a `package.json` file, it will be troublesome, and at times almost impossible for anyone else to run your code after cloning your project.

2.  Make a .gitignore file and add the following lines to it. This will tell git not to track these files, and thus they won't be committed to Github.

```
node_modules
.DS_Store
.env
```

3.  Make a JavaScript file named `keys.js`.

* Inside keys.js your file will look like this:

```js
exports.API = {
  apiKey: process.env.key,
  appID: process.env.appID
};
```

4.  Next, create a file named `.env`, add the following to it, replacing the values with your API key and appID (no quotes) once you have them:

```js
# API Info

key = 1234
appID = 5678
```

* This file will be used by the `dotenv` package to set what are known as environment variables to the global `process.env` object in node. These are values that are meant to be specific to the computer that node is running on, and since we are gitignoring this file, they won't be pushed to github &mdash; keeping our API key information private.

* If someone wanted to clone your app from github and run it themselves, they would need to supply their own `.env` file for it to work.

8.  At the top of the `main.js` file, add code to read and set any environment variables with the dotenv package:

```js
require("dotenv").config();
```

9.  Add the code required to import the `keys.js` file and store it in a variable.:

```js
var fs = require("fs");
var keys = require("./keys.js");
var apiKey = keys.API.apiKey;
var appID = keys.API.appID;
```
