import angular from 'angular';
import data from './example';

let NoteService = angular.module('NoteService', [])
.service('NoteService', function($timeout) {
  let items = data;
  this.getAll = () => {
    return items;
  }
  this.getOne = (id) => {
    return items[id];
  }
});

export default NoteService;
