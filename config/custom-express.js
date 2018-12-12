var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

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

app.set('secret', 'isaacjames');
// login-user

app.use((req,res,next)=>{
      res.locals.user = app.get('name');
      res.locals.id = app.get('id');
      next();
});


app.use( express.static('./public'))
// auth precisa ser carregado primeiro
consign({cwd:'app'})
      .include('models')
      .then('api')
      .then('routes/auth.js')
      .then('routes')
      .into(app);
app.get('/',(req,res)=>{
      req.session.user = token;
})

module.exports = app;