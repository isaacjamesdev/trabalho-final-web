module.exports = (app)=>{
    var api = app.api.auth;
    var apiView = app.api.view;

    app.use('/sign-in', apiView.signIn);
    app.post('/auth', api.auth);
    app.get('/log-out', api.logOut);
    app.use('/checkout', api.checkAuth);
    // app.use('/*', api.checkAuth);
    
    return api;
}