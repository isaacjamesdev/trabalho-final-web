const express = require('express');
const app = express();
var consign = require('consign');
app.set('views', __dirname+'../app/views');
app.set('view engine', 'ejs')
app.use( express.static('app'))

consign({cwd:'app'})
      .include('models')
      .then('routes')(app);

module.exports = app;