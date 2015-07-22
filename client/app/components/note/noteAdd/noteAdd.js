import 'angular-ui-router';
import noteAddComponent from './noteAdd.component';

let noteAddModule = angular.module('noteAdd', [])
.config(($stateProvider) => {
  $stateProvider
    .state('add', {
      url: '/add',
      template: '<note-add></note-add>'
    });
})
.service('noteAdd', function($rootScope) {
  this.note = {
    title: window.localStorage['new-note-title'] || "",
    keywords: window.localStorage['new-note-keywords'] || "",
    text: window.localStorage['new-note-text'] || ""
  };

  $rootScope.$watch(() => {
    return this.note;
  }, function (note) {
      window.localStorage['new-note-title'] = note.title;
      window.localStorage['new-note-keywords'] = note.keywords;
      window.localStorage['new-note-text'] = note.text;
  }, true);
})
.directive('noteAdd', noteAddComponent);

export default noteAddModule;
