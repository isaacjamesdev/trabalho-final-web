var user = require('./user')
module.exports = (app) =>{
    api = {}

    api.signUp = (req,res)=>{
        res.render('sign-up');
    }

    api.register = (req,res)=>{
        res.render('register-product');
    }

    
    return api;
}