var mongoose = require('mongoose');

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
                res.json(product)
            }, error =>{
                console.log('error in serve');
                res.status(500).json(error);
            }
            );
    }
    
    api.find = (req, res)=>{
        model.find()
            .then(function(product) {
                res.render('home', {
                    products: product
                })
            }, function(error) {
                console.log(error);
                res.status(500).json(error);
            });
    }
    
    api.findById = (req,res)=>{
        if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
            model.findById(req.params.id)
                .then(product =>{
                    if(!product) throw Error('product not found');
                    res.render('product-details',{product:res.json(product)})
                }, error =>{
                    console.log(error);
                    res.status(404).json(error);
                }
                );
        }
        res.end('fodasse mew');
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
    return api;
}
