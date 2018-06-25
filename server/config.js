const express = require ('express');
const app = express();

app.use(express.static(__dirname + '/client'));

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`Listening to Port ${port}!!!`);
});
