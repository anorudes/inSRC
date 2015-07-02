class NoteListController {
	constructor(NoteService){
		this.notes = NoteService.getAll();
	}
}

NoteListController.$inject = ['NoteService'];

export default NoteListController;
