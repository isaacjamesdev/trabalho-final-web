module.exports = (app)=>{
    var api = {}

    api.addToCart = (req,res)=>{
        res.render('cart')
    }

    return api;
}