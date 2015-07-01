import angular from 'angular';
import Config from './config/config';
import About from './about/about';
import NoteShow from './note/noteShow/noteShow';
import NoteList from './note/noteList/noteList';
import NoteAdd from './note/noteAdd/noteAdd';
import NoteEdit from './note/noteEdit/noteEdit';

let componentModule = angular.module('app.components', [
    Config.name,
    About.name,
    NoteShow.name,
    NoteList.name,
    NoteAdd.name,
    NoteEdit.name
]);

export default componentModule;
