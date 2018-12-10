module.exports = (app) =>{
    api = {}
    api.signUp = (req,res)=>{
        res.render('sign-up');
    }
    return api;
}