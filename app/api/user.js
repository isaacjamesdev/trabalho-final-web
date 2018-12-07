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
    model.create({firstName: req.body.firstName, middleName: req.body.middleName,
        email: req.body.email, address: {
            cep: req.body.cep,
            city: req.body.city,
            state: req.body.state,
            street: req.body.street
    },
    orders: {
        number: req.body.number,
        name: req.body.name,
        price: req.body.price,
        date: req.body.date,
        address: req.body.address,
        status: req.body.status
    }})
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

module.exports = api;