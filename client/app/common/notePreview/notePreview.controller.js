class NotePreviewController {
	constructor(NoteService){
    this.close = () => {
      this.note = false;
    };
    this.delete = () => {
      NoteService.delete(this.note.id);
      NoteService.saveData();
      this.close();
    };
	}
}
NotePreviewController.$inject = ['NoteService'];
export default NotePreviewController;