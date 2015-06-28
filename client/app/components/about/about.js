import angular from 'angular';
import 'angular-ui-router';
import aboutComponent from './about.component';

let aboutModule = angular.module('about', [
	'ui.router'
])
.directive('about', aboutComponent);

export default aboutModule;