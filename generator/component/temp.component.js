import template from './<%= name %>.html!text';
import controller from './<%= name %>.controller';

let <%= name %>Component = () => {
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default <%= name %>Component;