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

    api.signIn = (req, res) => {
        res.render('sign-in')
    }
    return api;
}