class NotePreviewController {
  constructor(NoteService, ConfigService) {
    this.wordWrap = ConfigService.configData.wordWrap;
    this.delete = () => {
      NoteService.delete(this.note.id);
      this.closePreview();
    };
  }
}
NotePreviewController.$inject = ['NoteService', 'ConfigService'];
export default NotePreviewController;
