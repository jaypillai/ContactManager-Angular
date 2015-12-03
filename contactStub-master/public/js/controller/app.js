contactStubApp.controller("contactStubController", function ($scope, contactStubFactory, $location,$rootScope) {
    $scope.headerSrc = "tmpl/header.html";

    if (!$rootScope.contacts){
        $rootScope.contacts = contactStubFactory.query();
    } else {
        $rootScope.contacts.forEach(function (val) {
            if ($rootScope.currcontact && val.id == $rootScope.currcontact.id) {
                
                val.name = $rootScope.currcontact.name;
                val.tel = $rootScope.currcontact.tel;
      
            }
        });
    }
    
    $scope.currcontact = null;

    $scope.deleteContact = function (contact) {
        var index = $scope.contacts.indexOf(contact);
        $scope.contacts.splice(index, 1);
    };

    $scope.editContact = function (contact) {
        $rootScope.currcontact = contact;
        $location.path('/editContact');
    };

    $scope.addContact = function (contact) {
        $rootScope.currcontact = contact;
        $location.path('/addContact');
    };
    
});

contactStubApp.controller("editContactController", function ($scope, $location, $rootScope) {
    $scope.currentUser = $rootScope.currcontact;
    $scope.submitForm = function () {
        $rootScope.currcontact = $scope.currentUser;
        $location.path("/")
    }
    $scope.back = function () {
        $location.path("/");
    }
});
