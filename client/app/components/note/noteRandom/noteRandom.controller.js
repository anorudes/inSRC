/* toDo */
let rhtmlspecialchars = (str) => {
  if (typeof(str) === "string") {
    str = str.replace(/&gt;/ig, ">");
    str = str.replace(/&lt;/ig, "<");
    str = str.replace(/&#039;/g, "'");
    str = str.replace(/&nbsp;/g, " ");
    str = str.replace(/&quot;/ig, '"');
    str = str.replace(/&amp;/ig, '&');
  }
  return str;
};

class NoteRandomController {
  constructor(NoteService, userFilter, notePreview) {
    this.userFilter = userFilter;
    this.notes = NoteService.getAll();
    this.randomNotes = [];
    for (let item of this.notes) {
      this.randomNotes.push({
          item: item,
          rank: 0.5 - Math.random()
      });
    }

    this.notePreview = notePreview;
    this.showPreview = (note) => {
      this.notePreview.note = note.item;
      this.notePreview.note.text = rhtmlspecialchars(this.notePreview.note.text);
    };
  }
}

NoteRandomController.$inject = ['NoteService', 'userFilter', 'notePreview'];

export default NoteRandomController;


