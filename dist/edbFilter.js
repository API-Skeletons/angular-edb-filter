angular.directive('edbFilter', function() {
  return {
    restrict: 'E',
    scope: {
      field: "@field",
      alias: "@alias"
    },
    templateUrl: 'directive/edb-filter.html',
    transclude: true,
    compile: function compile(tElement, tAttrs, transclude) {
      return {
        pre: function(scope) {
          transclude(scope, function(clone) {
            scope.label = clone[0].textContent;
          });
        }
      }
    }
  }
})
;
