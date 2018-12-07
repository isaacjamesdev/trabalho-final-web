const express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
const app = express();

app.set('views', __dirname+'/../public');
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({
      extended:true
  }));
app.use( express.static('./public'))

consign({cwd:'app'})
      .include('models')
      .then('api')
      .then('routes')
      .into(app);


module.exports = app;