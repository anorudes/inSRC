import angular from 'angular';
import 'angular-ui-router';
import testComponent from './test.component';

let testModule = angular.module('test', [
	'ui.router'
])
.directive('test', testComponent);

export default testModule;