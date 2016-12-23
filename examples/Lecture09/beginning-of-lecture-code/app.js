(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

function DIController ($scope, $filter) {
  $scope.name = "";
  $scope.toUpper = function () {
    let upCase = $filter('uppercase')
    $scope.name = upCase($scope.name)
  }
}

})();
