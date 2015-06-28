import template from './config.html!text';
import controller from './config.controller';

let configComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'ctrl',
		scope: {},
		bindToController: true
	};
};

export default configComponent;