var express = require('express');


///Create app Srever

var app = express();

app.use(express.static('public'));

app.listen(7779,function(){
  console.log("Express server is up on port 7779");
  })
