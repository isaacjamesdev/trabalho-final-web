module.exports = (app)=>{
    var api = {}

    api.addToCart = (req,res)=>{
        window.sessionStorage.setItem('id', req.params.id)
        console.log(sessionStorage.getItem('id'))
    }

    return api;
}