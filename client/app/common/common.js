import angular from 'angular';
import Navbar from './navbar/navbar';
import Test from './test/test';

let commonModule = angular.module('app.common', [
	Navbar.name,
  Test.name
]);

export default commonModule;
