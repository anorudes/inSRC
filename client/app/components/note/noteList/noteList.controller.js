/* toDo */
let rhtmlspecialchars = (str) => {
  if (typeof(str) === "string") {
    str = str.replace(/&gt;/ig, ">");
    str = str.replace(/&lt;/ig, "<");
    str = str.replace(/&#039;/g, "'");
    str = str.replace(/&nbsp;/g, " ");
    str = str.replace(/&quot;/ig, '"');
    str = str.replace(/&amp;/ig, '&'); /* must do &amp; last */
  }
  return str;
};

class NoteListController {
  constructor($window, NoteService, userFilter, notePreview) {
    this.userFilter = userFilter;
    this.notes = NoteService.getAll();
    this.notePreview = notePreview;
    this.showPreview = (note) => {
      this.notePreview.note = note;
      this.notePreview.note.text = rhtmlspecialchars(this.notePreview.note.text);
    };
    $window.document.getElementById('search').focus();
  }
}

NoteListController.$inject = ['$window', 'NoteService', 'userFilter', 'notePreview'];

export default NoteListController;
