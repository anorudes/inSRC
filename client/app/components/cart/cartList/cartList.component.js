import template from './cartList.html!text';
import controller from './cartList.controller';

let cartListComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'ctrl',
		scope: {},
		bindToController: true
	};
};

export default cartListComponent;