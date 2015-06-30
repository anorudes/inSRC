import angular from 'angular';
import Home from './home/home';
import Config from './config/config';
import About from './about/about';
import NoteShow from './note/noteShow/noteShow';
import NoteList from './note/noteList/noteList';

let componentModule = angular.module('app.components', [
	Home.name,
  Config.name,
  About.name,
	NoteShow.name,
  NoteList.name
]);

export default componentModule;
