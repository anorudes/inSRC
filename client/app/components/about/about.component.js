import template from './about.html!text';
import controller from './about.controller';

let aboutComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'ctrl',
		scope: {},
		bindToController: true
	};
};

export default aboutComponent;