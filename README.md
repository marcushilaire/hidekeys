# Hiding API Keys in deployment

For this tutorial I built upon a [small front end application](https://github.com/marcushilaire/giphy) buy giving it a basic back end structure so it could be used as an an appropriate example.

## Configuration Variables on Heroku

#### Access the settings page from Heroku.

![](./instructionalImages/HerokuA.png)

#### Reveal configuration variables.

![](./instructionalImages/HerokuB.png)

#### Setting the configuration variables

![](./instructionalImages/HerokuC.png)
Define the configuration variable key value pairs as shown above.
Any code referencing the `process.env`object, [keys.js](keys.js) for example, will pull from config variables when deployed or the `.env` file in development.

## Sending variables from the server to the client

### [Server Side](server.js)

Set up a route on the server where the client can request a variable:

```js
app.get("/apiKey", function(req, res) {
  console.log("api key requested");
  res.status(200).send(apiKey);
});
```

### [Client Side](./public/logic/logic.js)

Set up a get request from the client to retrieve a variable:

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
