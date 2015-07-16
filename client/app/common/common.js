import Navbar from './navbar/navbar';
import NotePreview from './notePreview/notePreview';
import confirmClick from './confirmClick/confirmClick';
import contentEditable from './contentEditable/contentEditable';
let commonModule = angular.module('app.common', [
	Navbar.name,
	NotePreview.name,
  confirmClick.name,
  contentEditable.name
]);

export default commonModule;
