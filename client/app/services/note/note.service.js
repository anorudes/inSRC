import angular from 'angular';
import data from './example';

let NoteService = angular.module('NoteService', [])
.service('NoteService', function($timeout) {
  let items = data;
  let getIndex = (id) => {
    let item = items.find(el => el.id === id);
    let index = items.indexOf(item);
    return index;
  };
  let getMaxId = () => {
    let maxId = 0;
    items.map(function(el){
        maxId = el.id > maxId ? el.id : maxId;
    });
    return maxId;
  };
  this.emptyItem = {
    id: "",
    title: "",
    tags: "",
    text: "",
  };
  this.getAll = () => {
    return items;
  };
  this.getOne = (id) => {
    return items[getIndex(id*1)];
  };
  this.delete = (id) => {

  };
  this.add = (item) => {
    item.id = getMaxId() + 1;
    items.push(item);
  };
});

export default NoteService;
