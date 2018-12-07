module.exports = (app)=>{
    var api = {}

    api.addToCart = (req,res)=>{
<<<<<<< HEAD
        window.sessionStorage.setItem('id', req.params.id)
        console.log(sessionStorage.getItem('id'))
=======
        res.render('cart')
>>>>>>> c82c866114c6b6ec397ac69b3c73bb3f069343bf
    }

    return api;
}