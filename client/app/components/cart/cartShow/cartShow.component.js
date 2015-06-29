import template from './cartShow.html!text';
import controller from './cartShow.controller';

let cartShowComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		scope: {},
		controllerAs: 'cartShow'
	};
};

export default cartShowComponent;