import angular from 'angular';
import 'angular-ui-router';
import noteListComponent from './noteList.component';

let noteListModule = angular.module('noteList', ['NoteService'])

.config(($stateProvider, $urlRouterProvider)=>{
	$stateProvider
		.state('list', {
			url: '/list',
			template: '<note-list></note-list>',
      resolve: {
        notes: (NoteService) => {
          return NoteService.getAll().length || NoteService.resolveData();
        }
      }
		});
  $urlRouterProvider.otherwise('list');
})
.directive('noteList', noteListComponent)

.filter('searchByTags', function(){
  return function(items, input = ""){
    return items.filter(function(item){
      let noteTags = item.tags.split(',');
      let searchTags = input.split(',');
      let found = 0;
      for (let searchTag of searchTags) {
        for (let noteTag of noteTags) {
          if (noteTag.indexOf(searchTag) >= 0) {
            found += 1;
            break;
          }
        }
      }
      return found === searchTags.length;
    });
  };
});



export default noteListModule;
