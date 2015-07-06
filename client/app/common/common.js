import angular from 'angular';
import Navbar from './navbar/navbar';
import NotePreview from './notePreview/notePreview';

let commonModule = angular.module('app.common', [
	Navbar.name,
	NotePreview.name
]);

export default commonModule;
