import angular from 'angular';
import CartService from './cart/cart.service';

let servicesModule = angular.module('app.services', [
	CartService.name
]);

export default servicesModule;
