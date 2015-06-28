import angular from 'angular';
import 'angular-ui-router';
import cartListComponent from './cartList.component';

let cartListModule = angular.module('cartList', [
	'ui.router'
])
.directive('cartList', cartListComponent);

export default cartListModule;