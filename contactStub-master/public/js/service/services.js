contactStubApp = angular.module('contactStubApp', ['ngResource', 'ngRoute']);
contactStubApp.factory('contactStubFactory', function ($resource) {
    return $resource('/contacts');
});
contactStubApp.factory('contactStubBookingsFactory', function ($resource) {
    return $resource('/bookings');
});