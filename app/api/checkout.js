module.exports = (app)=>{
    var api = {}

    api.checkout = (req,res)=>{
        var item = {
            'title': req.body.title,
            'price': req.body.price,
            'quantity': req.body.quantity,
            'gender': req.body.gender,
            'size': req.body.size,
            'url': req.body.url,
        }
        res.render('checkout', {
            'item': item
        })
    }

    return api;
}