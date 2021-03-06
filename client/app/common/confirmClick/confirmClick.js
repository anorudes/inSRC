let confirmClick = angular.module('confirmClick', [])
.directive('ngConfirmClick', [
function() {
  return {
    restrict: 'A',
    link: function(scope, element, attr) {
      var msg = attr.ngConfirmClick || "Are you sure?";
      var clickAction = attr.confirmedClick;
      element.bind('click', function(event) {
        if (window.confirm(msg)) {
          scope.$eval(clickAction)
        }
      });
    }
  };
}
]);

export default confirmClick;
