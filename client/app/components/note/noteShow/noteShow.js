import 'angular-ui-router';
import noteShowComponent from './noteShow.component';

let noteShowModule = angular.module('noteShow', [])
.config(($stateProvider) => {
  $stateProvider
    .state('show', {
      url: '/show/:id',
      template: '<note-show></note-show>'
    });
})
.directive('noteShow', noteShowComponent);

export default noteShowModule;
