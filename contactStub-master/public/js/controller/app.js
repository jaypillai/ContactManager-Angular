contactStubApp.controller("contactStubController", function ($scope, contactStubFactory, $location) {
    $scope.headerSrc = "tmpl/header.html";

    $scope.contacts = contactStubFactory.query();

    $scope.currcontact = null;

    $scope.getcontactById = function (id) {
        var contacts = $scope.contacts;
        for (var i = 0; i < contacts.length; i++) {
            var contact = $scope.contacts[i];
            if (contact.id == id) {
                $scope.currcontact = contact;
            }
        }
    };

    $scope.back = function () {
        window.history.back();
    };

    $scope.getCount = function (n) {
        return new Array(n);
    }

    $scope.isActive = function (route) {
        return route === $location.path();
    }

    $scope.isActivePath = function (route) {
        return ($location.path()).indexOf(route) >= 0;
    }

});

contactStubApp.controller("contactDetailsController", function ($scope, $routeParams) {
    $scope.getcontactById($routeParams.id);
});
contactStubApp.controller("bookTicketsController", function ($scope, $http, $location, $routeParams) {
    $scope.getcontactById($routeParams.id);
    $scope.onlyNumbers = /^\d+$/;
    $scope.formData = {};
    $scope.formData.contact_id = $scope.currcontact.id;
    $scope.formData.contact_name = $scope.currcontact.name;
    $scope.formData.date = "Today"

    $scope.processForm = function () {
        console.log($scope.formData);
        $http({
            method: 'POST',
            url: '/book',
            data: $.param($scope.formData), // pass in data as strings
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            } // set the headers so angular passing info as form data (not request payload)
        })
            .success(function (data) {
                $location.path("/bookings");
            });
    };
});
contactStubApp.controller("bookingDetailsController", function ($scope, contactStubBookingsFactory) {
    $scope.bookings = contactStubBookingsFactory.query();
});