import 'angular-ui-router';
import noteListComponent from './noteList.component';

let noteListModule = angular.module('noteList', ['NoteService'])

.config(($stateProvider, $urlRouterProvider)=>{
	$stateProvider
		.state('list', {
			url: '/list',
			template: '<note-list></note-list>',
      resolve: {
        notes: (NoteService) => NoteService.getAll().length || NoteService.resolveData()
      }
		});
  $urlRouterProvider.otherwise('list');
})
.directive('noteList', noteListComponent)

.filter('searchByTags', function(){
  let searchByTags = (item, input) => {
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
  };
  let searchByTitle = (item, input) => {
    let noteTitle = item.title.split(' ');
    let searchTags = input.split(',');
    let found = 0;
    for (let searchTag of searchTags) {
      for (let noteTag of noteTitle) {
        if (noteTag.indexOf(searchTag) >= 0) {
          found += 1;
          break;
        }
      }
    }
    return found === searchTags.length;
  };
  return function(items, input = "", searchTags, searchTitle){
    return items.filter(function(item){
      let foundTags = searchTags === true ? searchByTags(item, input) : false;
      let foundTitle = searchTitle === true ? searchByTitle(item, input) : false;
      return foundTags || foundTitle;
    });
  };
});



export default noteListModule;
