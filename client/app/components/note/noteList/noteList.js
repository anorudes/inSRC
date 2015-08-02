import 'angular-ui-router';
import noteListComponent from './noteList.component';

let noteListModule = angular.module('noteList', ['NoteService'])
.config(($stateProvider, $urlRouterProvider) => {
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
.factory('userFilter', [() => {
  return {
    searchInKeywords: true,
    searchInTitle: false,
    searchInText: false,
    searchText: "",
    searchLimit: true
  };
}])
.factory('notePreview', [() => {
  return {
    note: false
  };
}])
.filter('keywords', function() {
  return function(keywords) {
    return keywords.split(' | ')[0];
  };})
.filter('searchByKeywords', function() {
  let searchByKeywords = (item, input) => {
    let noteKeywords = item.keywords.toLowerCase().split(',');
    let searchKeywords = input.toLowerCase().split(' ');
    let found = 0;
    for (let searchKeyword of searchKeywords) {
      for (let noteKeyword of noteKeywords) {
        if (noteKeyword.indexOf(searchKeyword) >= 0) {
          found += 1;
          break;
        }
      }
    }
    return found === searchKeywords.length;
  };
  let searchByTitle = (item, input) => {
    let noteTitle = item.title.toLowerCase().split(' ');
    let searchTitle = input.toLowerCase().split(' ');
    let found = 0;
    for (let searchT of searchTitle) {
      for (let noteT of noteTitle) {
        if (noteT.indexOf(searchT) >= 0) {
          found += 1;
          break;
        }
      }
    }
    return found === searchTitle.length;
  };
  let searchByText = (item, input) => {
    let noteText = item.text.toLowerCase();
    let searchText = input.toLowerCase().split(' ');
    let found = 0;
    for (let searchT of searchText) {
      if (noteText.indexOf(searchT) >= 0) {
        found += 1;
      }
    }
    return found === searchText.length;
  };
  return function(items, input = "", searchKeywords, searchTitle, searchText, searchLimit) {
    let max = 0;
    return items.filter(function(item) {
      max++;
      if (searchLimit && max > 100) {
        return false;
      }
      let foundKeywords = searchKeywords === true ? searchByKeywords(item, input) : false;
      let foundTitle = searchTitle === true ? searchByTitle(item, input) : false;
      let foundText = searchText === true ? searchByText(item, input) : false;
      return foundKeywords || foundTitle || foundText;
    });
  };
});


export default noteListModule;
