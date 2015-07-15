import Navbar from './navbar/navbar';
import NotePreview from './notePreview/notePreview';
import confirmClick from './confirmClick/confirmClick';

let commonModule = angular.module('app.common', [
	Navbar.name,
	NotePreview.name,
  confirmClick.name
]);

export default commonModule;
