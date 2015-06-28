import template from './<%= name %>.html!text';
import controller from './<%= name %>.controller';

let <%= name %>Component = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'ctrl',
		scope: {},
		bindToController: true
	};
};

export default <%= name %>Component;