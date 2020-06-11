/**
 * Module dependencies.
 */
const express = require('express');
const app = express();
const path = require('path');
const server = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require('cors');
var User = require('./Models/User')

const mongoose = require('./Utilities/mongooseConfig')();

const authRoute = require('./Routes/auth');
const config = require("./Utilities/config").config;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cors());

app.use((err, req, res, next) => {
  return res.send({
    "statusCode": 401,
    "statusMessage": "Something went wrong"
  });
});

app.use('/auth', authRoute);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next();
});

/**
 * Start Express server.
 */
server.listen(config.NODE_SERVER_PORT.port, () => {
  console.log('app listening on port:' + config.NODE_SERVER_PORT.port);
});
