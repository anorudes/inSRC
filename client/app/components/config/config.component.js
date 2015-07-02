import template from './config.html!text';
import controller from './config.controller';

let configComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default configComponent;