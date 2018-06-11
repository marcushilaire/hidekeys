# Hiding API Keys in deployment

## Setting up configuration variables on Heroku

![](./instructionalImages/HerokuA.png)
Access the settings page from heroku.

![](./instructionalImages/HerokuB.png)
Reveal configuration variables.

![](./instructionalImages/HerokuC.png)
Define the configuration variable key value pairs as shown above.
Any code referencing `process.env.<variableName>`, [keys.js](keys.js) for example, will pull from config variables when deployed or the `.env` file in development.

## Sending variables from the server to the client

### [Server Side](server.js)

Set up a route on the server where the client can request an api key.

```js
app.get("/apiKey", function(req, res) {
  console.log("api key requested");
  res.status(200).send(apiKey);
});
```

### [Client Side](./public/logic/logic.js)

Set up a get request from the client to retrieve an api key.

```js
var apiKey; //globally defined

var fetchKey = function() {
  $.ajax({
    url: "/apiKey",
    method: "GET"
  }).then(function(data) {
    apiKey = data;
  });
};
```
