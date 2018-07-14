const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const request = require('request');
//Requierements and app are declared above.
//'16000289fc7a2f6fec7f6589838045855198864a'

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/search/users', function(req, res) {
  request(
    'https://api.github.com/search/users?q=location:mexico+language:javascript',
    function(error, response, body) {
      res.json(body);
    }
  );
});

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`Listening to Port ${port}!!!`);
});
