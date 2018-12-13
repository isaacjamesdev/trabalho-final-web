var mongoose = require('mongoose');

var schema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    stock:{
        type: Number,
        required: true
    },
     imagePath:{
         type: String,
         required: true
     }
});

mongoose.model('products', schema);
