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
	constructor(NoteService, userFilter){
    this.userFilter = userFilter;
		this.notes = NoteService.getAll();
    this.notePreview = false;
    this.showPreview = (note) => {
      this.notePreview = note;
      this.notePreview.text = rhtmlspecialchars(this.notePreview.text);
    };
	}
}

NoteListController.$inject = ['NoteService', 'userFilter'];

export default NoteListController;
