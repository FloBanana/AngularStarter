'use strict';

angular.
  module('core.service').
  factory('ServiceService', function ($http, $q) {
       return {
           greeting: function(name) {
              return "Hello " + name
           }
       };
  });
