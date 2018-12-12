var mongoose = require('mongoose');

var schema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    orders:[{
        number:{
            type:Number,
        },
        name:{
            type: String,
        },
        price:{
            type:Number,
        },
        date:{
            type:Date,
        },
        address:{
            type:String,
        },
        status:{
            type: String,
        }
    }],
    
    password:{
        type: String,
    }
});

mongoose.model('users', schema);