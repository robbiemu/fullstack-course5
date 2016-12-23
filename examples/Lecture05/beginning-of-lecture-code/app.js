(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
    $scope.name = "roberto"
    $scope.sayHello = function() { return "Hi from Coursera w/ JHU!"}
});

})();
