(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope', '$timeout'];
function CounterController($scope, $timeout) {
  $scope.counter = 0;

  $scope.upCounter = function(){$timeout(function(){ $scope.counter++ },2000)}
/*  $scope.upCounter =
//worse    setTimeout(function() { $scope.counter++ ; $scope.$digest()}, 2000)
    setTimeout(function() { $scope.$apply(function(){ $scope.counter++ }) }, 2000)
    console.log('counter incrementing')
};*/

}

})();
