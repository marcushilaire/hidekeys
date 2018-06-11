# Keeping API keys private

### Scaffolding

Run `npm init -y` to automatically set up the package json with default options.

Run `npm i --s dotenv` to install dotenv and add it to dependencies in the [package.json](package.json). This package will allow us to manipulate environment variables in development that can be accessed in the form `process.env<variableName>`.

set up the .env

set up the gitignore
this will keep the information defined explicitly in the .env off of github

pull the information from the .env as process.env as done in [keys.js](keys.js)
export from keys.js

reqire dotenv and fs

```js
require("dotenv").config();
var fs = require("fs");
```

and import keys from
