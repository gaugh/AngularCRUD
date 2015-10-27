app.config(function ($routeProvider) {
    $routeProvider.when('/', { templateUrl: 'App/Views/Userlisting.html', controller: 'customerController' })
    .when('/UserListing.html', { templateUrl: 'App/Views/Userlisting.html', controller: 'customerController' })
    .when('/AddUser.html', { templateUrl: 'App/Views/AddUser.html', controller: 'manageuserscontroller' })
    .when('/SignUp.html', { templateUrl: 'App/Views/SignUp.html', controller: 'signupController' })
    .when('/Login.html', { templateUrl: 'App/Views/Login.html', controller: 'loginController' });
});