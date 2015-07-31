import template from './noteAdd.html!text';
import controller from './noteAdd.controller';

let noteAddComponent = () => {
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default noteAddComponent;