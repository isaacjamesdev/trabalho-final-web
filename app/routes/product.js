module.exports = (app)=>{
    var apiProduct = app.api.product;
    var apiView = app.api.view;
    
    // apiView
    app.get('/product/register', apiView.register);
    
    // ApiProduct *Importante, a ordem das rotas importam
    app.get('/', apiProduct.find);
    app.get('/product/:id', apiProduct.findById);
    app.get('/:type/:category', apiProduct.find);
    app.post('/product/register', apiProduct.register);
}