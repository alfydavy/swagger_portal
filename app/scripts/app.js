'use strict';

/**
 * @ngdoc overview
 * @name bowerApp
 * @description
 * # bowerApp
 *
 * Main module of the application.
 */

/**
angular
  .module('bowerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngSwaggerUi'
  ])

 **/


angular
  .module('myApp', ['ngSanitize', 'swaggerUi'])
  .run(function(swaggerModules, swaggerUiExternalReferences, swagger1ToSwagger2Converter){
    swaggerModules.add(swaggerModules.BEFORE_PARSE, swagger1ToSwagger2Converter);
    swaggerModules.add(swaggerModules.BEFORE_PARSE, swaggerUiExternalReferences);
  })

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
