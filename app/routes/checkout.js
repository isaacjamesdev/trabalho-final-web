module.exports = (app)=>{
    var api = app.api.checkout
    app.post('/checkout', api.checkout);
    // app.get('/add-to-cart/:id', api.checkout);
}