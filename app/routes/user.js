module.exports = (app)=>{
    var apiView = app.api.view;
    app.get('/sign-up', apiView.signUp);
    app.post('/sign-up', apiView.signUp);
}