import angular from 'angular';
import Navbar from './navbar/navbar';
import Note from './note/note';

let commonModule = angular.module('app.common', [
	Navbar.name,
  Note.name
]);

export default commonModule;
