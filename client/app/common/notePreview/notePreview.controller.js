class NotePreviewController {
	constructor(NoteService, ConfigService){
    this.wordWrap = ConfigService.configData.wordWrap;
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
NotePreviewController.$inject = ['NoteService', 'ConfigService'];
export default NotePreviewController;