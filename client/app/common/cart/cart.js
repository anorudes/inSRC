import angular from 'angular';
import 'angular-ui-router';
import cartComponent from './cart.component';

let cartModule = angular.module('cart', [
	'ui.router'
])
.directive('cart', cartComponent);

export default cartModule;