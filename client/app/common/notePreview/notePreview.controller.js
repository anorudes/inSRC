import {beautifyJS, beautifyHTML, beautifyCSS} from '../../api/beautify/init';

console.log(beautifyCSS);

class NotePreviewController {
  constructor(NoteService, ConfigService) {
    this.wordWrap = ConfigService.configData.wordWrap;
    if (ConfigService.configData.beautify) {
      this.note.text = beautifyJS.js_beautify(this.note.text, {indent_size: 2});
      this.note.text = beautifyHTML.html_beautify(this.note.text, {indent_size: 2});
      this.note.text = beautifyCSS.css_beautify(this.note.text, {indent_size: 2});
    }
    this.delete = () => {
      NoteService.delete(this.note.id);
      this.closePreview();
    };
  }
}
NotePreviewController.$inject = ['NoteService', 'ConfigService'];
export default NotePreviewController;
