import angular from 'angular';
import Navbar from './navbar/navbar';
import Cart from './cart/cart';

let commonModule = angular.module('app.common', [
	Navbar.name,
  Cart.name
]);

export default commonModule;
