import angular from 'angular';
import NoteService from './note/note.service';

let servicesModule = angular.module('app.services', [
	NoteService.name
]);

export default servicesModule;
