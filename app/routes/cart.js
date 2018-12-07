module.exports = (app)=>{
    var api = app.api.cart

    app.get('/add-to-cart/:id', api.addToCart);
}