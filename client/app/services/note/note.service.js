import angular from 'angular';

let NoteService = angular.module('NoteService', [])
.service('NoteService', function($timeout, $http) {
  let serverURL = 'http://127.0.0.1:4000/data/';
  let data = {items: []};

  let getMaxId = () => {
    return Math.max.apply(Math, data.items.map(el => el.id));
  };

  this.emptyItem = {
    id: "",
    title: "",
    tags: "",
    text: "",
  };

  this.getAll = () => {
    return data.items;
  };

  this.getOne = (id) => {
    return data.items.find(el => el.id == id);
  };

  this.delete = (id) => {

  };

  this.add = (item) => {
    item.id = getMaxId() + 1;
    data.items.push(item);
  };

  this.resolveData = () => {
    return $http.get(serverURL + 'get').then((res) => {
      data.items = res.data;
      return data.items;
    });
  };

  this.saveData = () => {
    return $http.post(serverURL + 'update', {data: data.items});
  };


});

export default NoteService;
