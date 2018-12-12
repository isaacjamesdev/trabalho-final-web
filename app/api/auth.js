module.exports = (app) =>{
    var mongoose = require('mongoose');
    var jwt = require('jsonwebtoken');
    var api = {};
    var model = mongoose.model('users');

    api.auth = (req,res)=>{
        model.findOne({
            'username': req.body.username,
            'password': req.body.password
        })
            .then((user)=>{
                console.log(user)
                if(!user){
                    console.log('====Username not found====');
                    res.sendStatus(401);
                }else{
                    // criar o token
                    var token = jwt.sign({username: user.username}, app.get('secret'), {
                        expiresIn:20000
                    });
                    console.log('====token criado====');
                    res.set('x-access-token', token);

                    res.json({
                        'message': 'token criado',
                        'token': token
                    })
                    
                    // window.sessionStorage.token = token;
                    // console.log(window.sessionStorage.token);
                    // res.end('welcome');
                    
                }
            }, (error)=>{
                console.log('====Username not found====');
                res.sendStatus(401);
            });
    };

    api.checkAuth = (req,res,next)=>{
        var token = req.headers['x-access-token'];
        if(token){
            console.log('====verificando token====');
            jwt.verify(token, app.get('secret'), (error, decoded)=>{
                if(error){
                    console.log('====token reject====');
                    res.sendStatus(401);
                }
                req.user = decoded; 
                next();
            });
        }else{
            console.log('====token not sent====');
            res.sendStatus(401);
        }
    };

    return api;
}