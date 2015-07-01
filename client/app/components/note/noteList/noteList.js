import angular from 'angular';
import 'angular-ui-router';
import noteListComponent from './noteList.component';

let noteListModule = angular.module('noteList', [])
.config(($stateProvider, $urlRouterProvider)=>{
	$stateProvider
		.state('list', {
			url: '/list',
			template: '<note-list></note-list>'
		});
  $urlRouterProvider.otherwise('list');
})
.directive('noteList', noteListComponent);

export default noteListModule;
