import template from './noteList.html!text';
import controller from './noteList.controller';

let noteListComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'ctrl',
		scope: {},
		bindToController: true
	};
};

export default noteListComponent;