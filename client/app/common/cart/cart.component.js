import template from './cart.html!text';
import controller from './cart.controller';

let cartComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		scope: {
			cart: "="
		},
		controllerAs: 'cart'
	};
};

export default cartComponent;
