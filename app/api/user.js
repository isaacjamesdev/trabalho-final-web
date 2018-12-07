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