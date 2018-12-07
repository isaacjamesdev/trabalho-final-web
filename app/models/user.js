var mongoose = require('mongoose');

var schema = mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    middleName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    address:{
        cep:{
            type: Number,
            required: true
        },
        city:{
            type: String,
            required: true
        },
        state:{
            type: String,
            required: true
        },
        street:{
            type: String,
            required: true
        }
    },
    orders:[{
        number:{
            type:Number,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        price:{
            type:Number,
            required: true
        },
        date:{
            type:Date,
            required: true
        },
        address:{
            type:String,
            required: true
        },
        status:{
            type: String,
            required: true
        }
    }]
});

mongoose.model('User', schema);