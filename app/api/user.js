var mongoose = require('mongoose');
var api = {};
var model = mongoose.model('User');

api.list = (req, res) => {
    model.find({})
        .then(users => {
            res.json(users);
        }, error => {
            console.log('error in serve');
            res.status(500).json(error);
            }
        );
}

api.register = (req, res) => {
    var user = {
        'name':req.body.name,
        'email':req.body.email,
        'password':req.body.password,
        'gender':req.body.gender
    }
    model.create(user)
            .then(user =>{
                res.json(user)
            }, error =>{
                console.log('error in serve');
                res.status(500).json(error);
            }
            );
}

api.retrieveDataFromProfile = (req, res) => {
    model.findById(req.params.id)
        .then(user => {
            if(!user) throw Error('user not found');
            res.json(user);
        }, error => {
            console.log(error);
            res.status(404).json(error);
        });
}

api.findById = (req,res)=>{
    model.findById(req.params.id)
        .then(users =>{
            if(!users) throw Error('user not found');
            res.json(users);
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
        .then(users => {
            res.json(users)
        },error => {
            console.log().json;
            res.status(404)
        });
}

api.makeOrder = (req, res) => {
    var order = {
        number: req.body.number,
        name: req.body.name,
        price: req.body.price,
        date: req.body.date,
        address: req.body.address,
        status: req.body.status
    }
    
    model.orders.push(order)
}

module.exports = api;