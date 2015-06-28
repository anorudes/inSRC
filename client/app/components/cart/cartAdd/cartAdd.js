import angular from 'angular';
import 'angular-ui-router';
import cartAddComponent from './cartAdd.component';

let cartAddModule = angular.module('cartAdd', [
	'ui.router'
])
.directive('cartAdd', cartAddComponent);

export default cartAddModule;