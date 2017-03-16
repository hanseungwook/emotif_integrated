//==================Server Setup==================//
//================================================//

var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var app = express();
var port = process.env.PORT || 1337;

// Setting environment variables for development purposes
var dotenv = require('dotenv').config();

var databaseUri = process.env.DATABASE_URI || process.env.MONGODB_URI;

if (!databaseUri) {
  console.log('DATABASE_URI not specified, falling back to localhost.');
}

var api = new ParseServer({
  databaseURI: databaseUri,
  cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
  appId: process.env.APP_ID,
  masterKey: process.env.MASTER_KEY,
  serverURL: process.env.SERVER_URL  // Don't forget to change to https if needed
});

app.use('/parse', api);

app.listen(port, function() {
    console.log('Emotif backend with parse running on ' + port + '.');
});
