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

Seting up up a get route on the [server](server.js)
