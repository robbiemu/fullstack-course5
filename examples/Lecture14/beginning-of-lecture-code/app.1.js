(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope'];
function CounterController($scope) {
  $scope.counter = 0;
  $scope.onceCounter = 0;
  $scope.value= 'yo'

  $scope.getValue = function () {
    console.log(`watchers: ${$scope.$$watchersCount}`)
  };

  $scope.countOnce = function () {
    $scope.onceCounter=1
  };

  $scope.count = function () {
    $scope.counter++
  };

// no $$_foo_ or $watch off scope in controller
 // $scope.$watch(function(){console.log('digest loop fired!')})

/*
  $scope.$watch('counter', function(n,o){
    console.log(`new${n} old${o}`)
  })
  $scope.$watch('onceCounter', function(n,o){
    console.log(`1: new${n} old${o}`)
  })
  */

}


})();