module.exports = (app)=>{
    var api = {}

    api.checkout = (req,res)=>{
        var product = {
            '_id': req.body.id,
            'title': req.body.title,
            'price': req.body.price,
            'quantity': req.body.quantity,
            'gender': req.body.gender,
            'size': req.body.size,
            'imagePath': `/img/${photo.name}`
        }
        app.get('cart').push(product);
        res.redirect('/checkout')
    }

    return api;
}