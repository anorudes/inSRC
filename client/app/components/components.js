import angular from 'angular';
import Home from './home/home';
import Config from './config/config';
import About from './about/about';
import CartList from './cart/cartList/cartList';
import CartAdd from './cart/cartAdd/cartAdd';
import CartEdit from './cart/cartEdit/cartEdit';

let componentModule = angular.module('app.components', [
	Home.name,
  Config.name,
  About.name,
  CartList.name,
  CartAdd.name,
  CartEdit.name
]);

export default componentModule;