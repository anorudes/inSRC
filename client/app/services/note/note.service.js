import beautify from '../../../vendor/beautify/init';

let NoteService = angular.module('NoteService', ['ConfigService'])
.service('NoteService', function($timeout, $http, ConfigService) {
  const serverURL = 'http://127.0.0.1:4000/data/';
  const dbFile = 'db/data.json';

  let data = {
    items: []
  };

  let getMaxId = () => {
    return Math.max.apply(Math, data.items.map(el => el.id));
  };

  let getToday = () => {
    return moment().format('DD/MM/YYYY');
  };


  let filter = (text) => {
    return text;
  };

  this.getAll = () => {
    return data.items;
  };

  this.getOne = (id) => {
    return data.items.find(el => el.id == id);
  };

  this.delete = (id) => {
    data.items.splice(data.items.indexOf(this.getOne(id)), 1);
    this.saveData();
  };
      
  this.update = (note, noteEdit) => {
    note.title = noteEdit.title;
    note.text = filter(noteEdit.text);
    note.text = ConfigService.configData.beautify ? beautify(note.text) : note.text;
    note.keywords = noteEdit.keywords;
    note.date = getToday();
    this.saveData();
  };

  this.add = (item) => {
    item.text = item.text.trim();
    item.id = getMaxId() + 1;
    item.date = getToday();
    data.items.push({...item});
  };

  this.resolveData = async() => {
    let res = {
      data: ""
    }
    if (nw) { /* node-webkit */
        res.data = JSON.parse(fs.readFileSync(execPath + dbFile, 'utf8'));
    } else {
      res = await $http.get(serverURL + 'get');
    }
    data.items = res.data;
    return data.items;
  };

  this.saveData = async() => {
    if (nw) { /* node-webkit */
      fs.writeFile(execPath + dbFile, JSON.stringify(data.items));
    } else {
      return await $http.post(serverURL + 'update', {
        data: data.items
      });
    }
  };
});

export default NoteService;
