module.exports = (app)=>{
    var apiView = app.api.view;
    var apiUser = app.api.user;
    app.get('/sign-up', apiView.signUp);
    app.post('/sign-up', apiUser.register);
    app.get('/update-profile', apiView.viewProfileandEdit)
    app.post('update-profile', apiUser.retrieveDataFromProfile)
}