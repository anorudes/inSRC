import angular from 'angular';
import 'angular-ui-router';
import cartShowComponent from './cartShow.component';

let cartShowModule = angular.module('cartShow', [
	'ui.router'
])
.config(($stateProvider)=>{
	$stateProvider
		.state('cart-show', {
			url: '/cart/:id',
			template: '<cart-show></cart-show>'
		});
})
.directive('cartShow', cartShowComponent);

export default cartShowModule;
