const express = require ('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));



var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log(`Listening to Port ${port}!!!`);
});
