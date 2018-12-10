module.exports = (app) =>{
    api = {}

    api.signUp = (req,res)=>{
        res.render('sign-up');
    }

    api.register = (req,res)=>{
        res.render('register-product');
    }

    api.update = (req, res) => {
        res.render('profile')
    }
    return api;
}