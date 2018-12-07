app = require('./config/custom-express');
require('./config/database')('mongodb://localhost/shopping');

app.listen(3000, ()=>{
    console.log("Ouvindo porta ")
})