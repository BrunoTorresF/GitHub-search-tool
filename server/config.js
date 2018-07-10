
const express = require ('express');
const bodyParser = require("body-parser");
const app = express()
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
//'69fa9bcadb2669ae43d70dd20101c13fb9551349'
// this key has access to user public_repo repo repo_deployment repo:status read:repo_hook read:org read:public_key read:gpg_key

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));

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

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));




const port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log(`Listening to Port ${port}!!!`);
});
