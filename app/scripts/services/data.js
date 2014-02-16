'use strict';
angular.module('thinglistApp')
    .factory('Data', function ($resource) {
      return $resource('data/:type.json', {}, {
        query: {method: 'GET'}
      });
    });
