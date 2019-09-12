'use strict';

var express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
const mongodb = require("./config/MongoDBdatabase");
const routes = require("./routes/routes");

var app = express();
 
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
routes(app, express);

module.exports = app;