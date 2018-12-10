module.exports = (app)=>{
    var apiView = app.api.view;
    var apiProduct = app.api.product;
    app.get('/', apiProduct.find);
    
    // apiView
    app.get('/product/register', apiView.register);
    
    // ApiProduct *Importante, a ordem das rotas importam
    app.get('/', apiProduct.find);
    app.get('/product/:id', apiProduct.findById);
    app.post('/product/register', apiProduct.register);
    
    app.get('/gender/:gender', apiProduct.find);
    app.get('/add-to-cart/:id', apiProduct.addToCart);
    
    
    
}