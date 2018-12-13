var shortId = require('shortid');

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
            'url': req.body.url,
        }
        app.get('cart').push(product);
        res.redirect('/checkout')
    }

    api.payment = (req, res) => {
        idOrder = shortId.generate();
        products = req.body.cart;
        res.render('payment',{
            cart: products,
            id: idOrder
        });
        console.log(idOrder);
    }

    return api;
}