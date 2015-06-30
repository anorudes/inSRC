class NoteListController {
	constructor($scope, NoteService){
		$scope.notes = NoteService.getAll();
	}
}

NoteListController.$inject = ['$scope','NoteService'];

export default NoteListController;
