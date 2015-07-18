let NoteService = angular.module('NoteService', [])
.service('NoteService', function($timeout, $http) {
  const serverURL = 'http://127.0.0.1:4000/data/';
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
    data.items.splice(data.items.indexOf(this.getOne(id)), 1);
  };

  this.update = (id, item) => {
    item.text = item.text.trim();
    data.items[id] = angular.copy(item);
  };

  this.add = (item) => {
    item.text = item.text.trim();
    item.id = getMaxId() + 1;
    data.items.push(item);
  };

  this.resolveData = async () => {
    let res = await $http.get(serverURL + 'get');
    data.items = res.data;
    return data.items;
  };

  this.saveData = async () => {
    return await $http.post(serverURL + 'update', {data: data.items});
  };


});

export default NoteService;