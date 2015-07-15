import 'angular-ui-router';
import noteAddComponent from './noteAdd.component';

let noteAddModule = angular.module('noteAdd', [])
.config(($stateProvider)=>{
  $stateProvider
    .state('add', {
      url: '/add',
      template: '<note-add></note-add>'
    });
})
.directive('noteAdd', noteAddComponent);

export default noteAddModule;