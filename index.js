app = require('./config/custom-express');
// require('./config/database')('mongodb://localhost/shopping');
var mongoURI =  'mongodb://admin:admin123@ds011409.mlab.com:11409/comic-shirt'
require('./config/database')(mongoURI);

app.listen(80, ()=>{
    console.log("Ouvindo porta ")
})