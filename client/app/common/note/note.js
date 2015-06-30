import angular from 'angular';
import 'angular-ui-router';
import noteComponent from './note.component';

let noteModule = angular.module('note', [
	'ui.router'
])
.directive('note', noteComponent);

export default noteModule;