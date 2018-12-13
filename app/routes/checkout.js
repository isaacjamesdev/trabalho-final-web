module.exports = (app)=>{
    var api = app.api.checkout
    var apiView = app.api.view
    app.post('/checkout', api.checkout);
    app.get('/checkout', apiView.checkout);
    
}