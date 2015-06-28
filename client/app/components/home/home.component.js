import template from './home.html!text';
import controller from './home.controller';

let homeComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'ctrl',
		scope: {},
		bindToController: true
	};
};

export default homeComponent;