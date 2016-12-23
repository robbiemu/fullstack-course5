/* 
(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

function DIController ($scope, $filter) {
  $scope.name = "Yaakov";

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };
}

})();
*/

/*!function(){"use strict";function n(n,e){n.name="Yaakov",n.upper=function(){var a=e("uppercase");n.name=a(n.name)}}angular.module("DIApp",[]).controller("DIController",n)}();*/

/*(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', ['$scope', '$filter', DIController]);

function DIController ($scope, $filter) {
  $scope.name = "Yaakov";

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };
}

})();*/

/*!function(){"use strict";function e(e,n){e.name="Yaakov",e.upper=function(){var o=n("uppercase");e.name=o(e.name)}}angular.module("DIApp",[]).controller("DIController",["$scope","$filter",e])}();*/

(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

DIController.$inject = ['$scope', '$filter']
function DIController ($scope, $filter) {
  $scope.name = "Yaakov";

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };
}

})();