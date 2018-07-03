r
const express = require ('express');
const bodyParser = require("body-parser");
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const app = express()
//Requierements and app are declared above.

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }



`);
//user is going to  search for users by location and/or language.
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
