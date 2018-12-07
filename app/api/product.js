var mongoose = require('mongoose');
var api = {};
var model = mongoose.model('Product');

api.list = (req,res)=>{
    model.find({})
        .then(products =>{
            res.json(products);
        }, error =>{
            console.log('error in serve');
            res.status(500).json(error);
            }
        );
}

/*
contact.list = (req,res)=>{
    request.get(externalApi, (error, response, body) =>{
        res.render('list',{
            contacts: JSON.parse(body)
        })
    });    
}
*/

api.findById = (req,res)=>{
    model.findById(req.params.id)
        .then(product =>{
            if(!product) throw Error('product not found');
            res.json(product);
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

        },error=>{
            console.log().json;
            res.status(404)
        });
}

module.exports = api;