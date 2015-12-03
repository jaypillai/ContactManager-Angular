contactStubApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'tmpl/home.html',
            controller: 'contactStubController'
        }).when('/editContact', {
            templateUrl: 'tmpl/editContact.html',
            controller: 'editContactController'
        }).when('/addContact', {
            templateUrl: 'tmpl/addContact.html',
            controller: 'addContactController'
        }).otherwise({
            redirectTo: '/'
        });
});
