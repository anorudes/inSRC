import template from './home.html!text';
import controller from './home.controller';

let homeComponent = () => {
  return {
    template,
    controller,
    restrict: 'E',
    controllerAs: 'vm',
    scope: {},
    bindToController: true
  };
};

export default homeComponent;
