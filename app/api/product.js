var mongoose = require('mongoose');
var Cart = require('../models/cart');

module.exports = (app)=>{  
    var api = {};
    var model = mongoose.model('Product');
    
    api.register = (req,res)=>{
        var product = {
            'title': req.body.title,
            'url': req.body.url,
            'category': req.body.category,
            'price': req.body.price,
            'stock': req.body.stock,
        }
        
        model.create(product)
            .then(product =>{
                res.status(204).redirect('/');
            }, error =>{
                console.log('error in serve');
                res.status(500).json(error);
            }
            );
    }
    
    api.find = (req, res)=>{
<<<<<<< HEAD
        if(!req.params.gender){
            model.find()
=======
        model.find()
>>>>>>> parent of 468d90c... updates
            .then(function(product) {
                res.render('home', {
                    products: product
                })
            }, function(error) {
                console.log(error);
                res.status(500).json(error);
            });
<<<<<<< HEAD
        }
        else{
            model.find({'category': req.params.gender})
            .then(function(product) {
                res.render('home', {
                    products: product
                })
            }, function(error) {
                console.log(error);
                res.status(500).json(error);
            });
        }
=======
>>>>>>> parent of 468d90c... updates
    }
    
    api.findById = (req,res)=>{
        model.findById(req.params.id)
                .then(product =>{
                    if(!product) throw Error('product not found');
                    res.render('product-details',{product: product})
                    }, error =>{
                    console.log(error);
                    res.status(404).json(error);
                    }
                );
    }
    
    api.remove = (req,res)=>{
        model.findByIdAndRemove({_id: req.params.id})
            .then(()=>{
                res.status(204);
            }, error =>{
                console.log(error);
                res.status(500).json(error);
            });
    }
    
    api.update = (req,res)=>{
        model.findByIdAndUpdate(req.body.id,req.body)
            .then(foto=>{
                res.json(foto);
            },error=>{
                console.log().json;
                res.status(404)
            });
    }

    api.addToCart = (req,res)=>{
        let productId = req.params.id;
        var cart = new Cart(req.session.cart? req.session.cart : {});
        model.findById(productId)
                .then(product =>{
                    if(!product) throw Error('product not found');
                    cart.add(product, product.id)
                    req.session.cart = cart;
                    console.log(req.session.cart);
                    res.redirect('/')
                    }, error =>{
                    // console.log(error);
                    res.status(404).json(error);
                    }
                );
    }
    return api;
}
