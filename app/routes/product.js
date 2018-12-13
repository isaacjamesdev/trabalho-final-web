module.exports = (app)=>{
    var apiView = app.api.view;
    var apiProduct = app.api.product;
    
    // apiView
    
    
    // ApiProduct *Importante, a ordem das rotas importam
    app.get('/', apiProduct.find);
    app.get('/product/:id', apiProduct.findById);
    
    app.get('/product/register', apiView.register);
    app.post('/product/register', apiProduct.register);
    
    app.get('/gender/:gender', apiProduct.find);
    app.get('/add-to-cart/:id', apiProduct.addToCart);
}