(function () {
'use strict';

angular.module('NameCalculator', [])

.controller('NameCalculatorController', function($scope) {
    $scope.name=''
    $scope.total=0
    $scope.updateNumeric = function () {
        let total = calculateNumericForString($scope.name)

        $scope.total = total
    }

    function calculateNumericForString(s) {
        let tot = 0;
        for (let i = 0; i < s.length; i++){
            tot += s.charCodeAt(i)
        }
        return tot
    }

})

})();
