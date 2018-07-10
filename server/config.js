const express = require('express');
const bodyParser = require("body-parser");
<<<<<<< HEAD
const app = express()
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
//'69fa9bcadb2669ae43d70dd20101c13fb9551349'
// this key has access to user public_repo repo repo_deployment repo:status read:repo_hook read:org read:public_key read:gpg_key
=======
const app = express();
const request = require('request');
//Requierements and app are declared above.
//'16000289fc7a2f6fec7f6589838045855198864a'
>>>>>>> b0d85bd308c48aa37ff25a77f3a2c0fc56882799

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

<<<<<<< HEAD
// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  query {
    hello: String
  },
  query{
    name:string
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!';
  },
};
=======
app.get('/search/users', function(req, res) {
  request('https://api.github.com/search/users?q=location:mexico+language:javascript',
    function(error, response, body) {
      res.json(body)
    });
});
>>>>>>> b0d85bd308c48aa37ff25a77f3a2c0fc56882799



<<<<<<< HEAD


const port = process.env.PORT || 8080;
=======
const port = process.env.PORT || 3000;
>>>>>>> b0d85bd308c48aa37ff25a77f3a2c0fc56882799

app.listen(port, function() {
  console.log(`Listening to Port ${port}!!!`);
});
