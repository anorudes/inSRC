import angular from 'angular';
import 'angular-ui-router';
import noteListComponent from './noteList.component';

let noteListModule = angular.module('noteList', [])
.config(($stateProvider)=>{
	$stateProvider
		.state('note-list', {
			url: '/list',
			template: '<note-list></note-list>'
		});
})
.directive('noteList', noteListComponent);

export default noteListModule;
