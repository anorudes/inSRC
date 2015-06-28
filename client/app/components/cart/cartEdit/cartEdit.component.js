import template from './cartEdit.html!text';
import controller from './cartEdit.controller';

let cartEditComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'ctrl',
		scope: {},
		bindToController: true
	};
};

export default cartEditComponent;