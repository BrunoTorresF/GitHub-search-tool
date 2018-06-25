const express = require ('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
  console.log(`Listening to Port 3000`);
});
