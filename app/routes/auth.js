module.exports = (app)=>{
    var api = app.api.auth;
    var apiView = app.api.view;

    // app.post('/auth', api.auth);
    // app.use('/sign-in', apiView.signIn);
    // app.use('/*', api.checkAuth);
    
    return api;
}