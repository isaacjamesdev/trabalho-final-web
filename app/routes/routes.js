//falta importar os controllers
module.exports = (app)=>{
    app.get('/',(req,res)=>{
        res.end('fungando');
    })
}