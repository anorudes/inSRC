import template from './noteList.html!text';
import controller from './noteList.controller';

let noteListComponent = () => {
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default noteListComponent;