import template from './noteAdd.html!text';
import controller from './noteAdd.controller';

let noteAddComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'ctrl',
		scope: {},
		bindToController: true
	};
};

export default noteAddComponent;