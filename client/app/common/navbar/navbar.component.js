import template from './navbar.html!text';
import controller from './navbar.controller';

let navbarComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'ctrl2',
		scope: {},
		bindToController: true
	};
};

export default navbarComponent;