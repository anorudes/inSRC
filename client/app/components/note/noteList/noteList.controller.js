class NoteListController {
	constructor(NoteService){
		this.notes = NoteService.getAll();
    this.notePreview = false;
    this.showPreview = (note) => {
      this.notePreview = note;
    };
	}
}

NoteListController.$inject = ['NoteService'];

export default NoteListController;
