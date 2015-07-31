import template from './noteRandom.html!text';
import controller from './noteRandom.controller';

let noteRandomComponent = () => {
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default noteRandomComponent;