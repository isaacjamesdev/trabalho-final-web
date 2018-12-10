const express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
// express session
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

app.set('views', __dirname+'/../public');
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({
      extended:true
  }));
// config session-express
app.use(session(
      {secret: 'mysupersecret',
      resave:'false',
      saveUninitalized: false,
      store: new MongoStore({mongooseConnection: mongoose.connection}),
      cookie:{maxAge: 100 * 60 * 1000}
}));

app.use( express.static('./public'))
// app.use((req,res,next)=>{
//       res.locals.login = req.isAuthenticated
//       res.locals.session = req.session;
//       next();
// });

consign({cwd:'app'})
      .include('models')
      .then('api')
      .then('routes')
      .into(app);


module.exports = app;