import template from './options.html!text';
import controller from './options.controller';

let optionsComponent = function() {
  return {
    template,
    controller,
    restrict: 'E',
    controllerAs: 'vm',
    scope: {},
    bindToController: true
  };
};

export default optionsComponent;
