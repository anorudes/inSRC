import template from './noteShow.html!text';
import controller from './noteShow.controller';

let noteShowComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		scope: {},
		controllerAs: 'vm'
	};
};

export default noteShowComponent;