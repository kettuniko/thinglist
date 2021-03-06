'use strict';
angular.module('thinglistApp')
    .directive('thing', function (Data) {
        return {
            templateUrl: 'partials/thing.html',
            restrict: 'E',
            scope: {},
            link: function (scope, element, attrs) {
                scope.thing = Data.query({type: attrs.type});
            }
        };
    });
