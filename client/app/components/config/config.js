import angular from 'angular';
import 'angular-ui-router';
import configComponent from './config.component';

let configModule = angular.module('config', [
	'ui.router'
])
.directive('config', configComponent);

export default configModule;