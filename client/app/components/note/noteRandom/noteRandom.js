import 'angular-ui-router';
import noteRandomComponent from './noteRandom.component';

let noteRandomModule = angular.module('noteRandom', [])
.config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('random', {
        url: '/random',
        template: '<note-random></note-random>',
        resolve: {
          notes: (NoteService) => NoteService.getAll().length || NoteService.resolveData()
        }
      });
    $urlRouterProvider.otherwise('list');
  })
.directive('noteRandom', noteRandomComponent);

export default noteRandomModule;

