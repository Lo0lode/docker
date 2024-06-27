var express = require('express');
var app = module.exports = express();

app.get('/', function(req, res){
  res.send('be-be-b-e-be-be-b-e-b-');
});
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
