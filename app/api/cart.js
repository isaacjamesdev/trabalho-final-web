module.exports = (app)=>{
    var api = {}

    api.addToCart = (req,res)=>{
        localStorage.setItem('item', req.params.id);
    }

    return api;
}