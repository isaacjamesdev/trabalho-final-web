var mongoose = require('mongoose');

var schema = mongoose.Schema({
    titulo:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    store:{
        type: Number,
        required: true
    }
});

mongoose.model('Product',schema);