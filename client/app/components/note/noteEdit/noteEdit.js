import 'angular-ui-router';
import noteEditComponent from './noteEdit.component';

let noteEditModule = angular.module('noteEdit', [])
.config(($stateProvider)=>{
  $stateProvider
    .state('edit', {
      url: '/edit/:id',
      template: '<note-edit></note-edit>'
    });
})
.directive('noteEdit', noteEditComponent);

export default noteEditModule;