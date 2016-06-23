'use strict';

angular.
  module('helloWorld').
  component('helloWorld', {
    templateUrl: 'hello-world/hello-world.template.html',
    controller: ['$scope', 'ServiceService',
        function($scope, ServiceService){
            $scope.greeting = "";

            $scope.greeting = ServiceService.greeting("Flo");
        }
    ]
  });
