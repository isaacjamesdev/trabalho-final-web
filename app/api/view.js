module.exports = (app) =>{
    api = {}
    api.signUp = (req,res)=>{
        res.render('sign-up');
    }

    api.viewProfileandEdit = (req, res) => {
        res.render('profile')
    }
    return api;
}