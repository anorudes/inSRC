import angular from 'angular';
import 'angular-ui-router';
import cartEditComponent from './cartEdit.component';

let cartEditModule = angular.module('cartEdit', [
	'ui.router'
])
.directive('cartEdit', cartEditComponent);

export default cartEditModule;