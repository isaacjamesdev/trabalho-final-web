module.exports = (app)=>{
    var api = app.api.checkout
    app.post('/checkout', api.checkout);
    
}