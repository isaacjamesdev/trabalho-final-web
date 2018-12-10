module.exports = (app)=>{
    var api = app.api.product;
    app.get('/', api.find);
    
<<<<<<< HEAD
    // apiView
    app.get('/product/register', apiView.register);
    
    // ApiProduct *Importante, a ordem das rotas importam
    app.get('/', apiProduct.find);
    app.get('/product/:id', apiProduct.findById);
    app.post('/product/register', apiProduct.register);
    
    app.get('/gender/:gender', apiProduct.find);
    app.get('/add-to-cart/:id', apiProduct.addToCart);
    
    
    
=======
    app.get('/product/register', (req,res)=>{
        res.render('register-product');
    });
    app.post('/product/register', api.register);
    app.get('/product/:id', api.findById);
>>>>>>> parent of 468d90c... updates
}