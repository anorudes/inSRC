import About from './about/about';
import NoteShow from './note/noteShow/noteShow';
import NoteList from './note/noteList/noteList';
import NoteAdd from './note/noteAdd/noteAdd';
import NoteEdit from './note/noteEdit/noteEdit';
import NoteRandom from './note/noteRandom/noteRandom';
import Options from './options/options';

let componentModule = angular.module('app.components', [
  About.name,
  NoteShow.name,
  NoteList.name,
  NoteAdd.name,
  NoteEdit.name,
  NoteRandom.name,
  Options.name
]);

export default componentModule;
