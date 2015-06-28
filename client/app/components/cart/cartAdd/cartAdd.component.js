import template from './cartAdd.html!text';
import controller from './cartAdd.controller';

let cartAddComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'ctrl',
		scope: {},
		bindToController: true
	};
};

export default cartAddComponent;