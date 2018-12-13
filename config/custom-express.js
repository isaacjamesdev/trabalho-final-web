var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

var fileUpload = require('express-fileupload');
// express session
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

// Default options
app.use(fileUpload())


app.set('views', __dirname+'/../public');
app.set('view engine', 'ejs')
app.set('secret', 'isaacjames');
app.set('cart',[]);

app.use(bodyParser.urlencoded({
      extended:true
}));
app.use( express.static('./public'))
app.use((req,res,next)=>{
      res.locals.cart = app.get('cart');
      res.locals.user = app.get('name');
      res.locals.id = app.get('id');
      next();
});

// auth precisa ser carregado primeiro
consign({cwd:'app'})
            .include('models')
            .then('api')
            .then('routes/auth.js')
            .then('routes')
      .into(app);

module.exports = app;



/*
      // app.get('/',(req,res)=>{
      //       req.session.user = token;
      // })

      // express session
      var session = require('express-session');

      não aplicados com sucesso:
      Cart
      var MongoStore = require('connect-mongo')(session);
      config session-express | Cart
      app.use(session(
            {secret: 'mysupersecret',
            resave:'false',
            saveUninitalized: false,
            store: new MongoStore({mongooseConnection: mongoose.connection}),
            cookie:{maxAge: 100 * 60 * 1000}
      }));
*/
