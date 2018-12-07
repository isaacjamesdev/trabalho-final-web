module.exports = function(uri){
    const mongoose = require('mongoose');
mongoose.connect('mongodb://'+uri);

mongoose.connection.on('connected',()=>{
    console.log('concetado ao MongoDB');
});

mongoose.connection.on('error', function(error) {
    console.log('Erro na conexão: ' + error);
});    

mongoose.connection.on('disconnected',()=>{
     console.log('MongodDB desconectado');
});

process.on('SIGINT',()=>{
    mongoose.connection.close(function() {
        console.log('Aplicação terminada, conexão fechada')
        process.exit(0);
    });
});
}