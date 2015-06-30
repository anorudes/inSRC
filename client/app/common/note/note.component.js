import template from './note.html!text';
import controller from './note.controller';

let noteComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		scope: {
			note: "="
		},
		controllerAs: 'note'
	};
};

export default noteComponent;
