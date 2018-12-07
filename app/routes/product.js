module.exports = (app)=>{
    var api = app.api.product;
    app.get('/', api.find);
    
    app.get('/product/register', (req,res)=>{
        res.render('register-product');
    });
    app.post('/product/register', api.register);
    app.get('/product/:id', api.findById);
}