const express = require ('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));



var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log(`Listening to Port ${port}!!!`);
});
