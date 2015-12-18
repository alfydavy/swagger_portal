'use strict';

/**
 * @ngdoc function
 * @name bowerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bowerApp
 * Author: Alfred David
 */

/**
angular.module('bowerApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Swagger'
    ];
  });
**/

angular.module('swaggerUi')
  .controller('MainCtrl', function ($scope) {
    //init form
    $scope.isLoading = false;
    //swaggerUrl = 'http://petstore.swagger.io/v2/swagger.json';
    $scope.url = $scope.swaggerUrl = 'http://petstore.swagger.io/v2/swagger.json';
    // error handling
    $scope.myErrorHandler = function (data, status) {
      alert('failed to load swagger: ' + status+ '  ' +data);
    };
  });



  /**
.controller('MyCtrl', function($scope){
  // init form
  $scope.isLoading = false;
  $scope.url = $scope.swaggerUrl = 'http://petstore.swagger.io/v2/swagger.json';
  // error management
  $scope.myErrorHandler = function(data, status){
    alert('failed to load swagger: '+status+'   '+data);
  };
});


   **/
