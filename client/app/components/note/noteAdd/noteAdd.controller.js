class NoteAddController {
  constructor($state, $window, NoteService, ConfigService, noteAdd) {
    this.wordWrap = ConfigService.configData.wordWrap;
    this.note = noteAdd.note;

    this._resetForm = () => {
      this.note.title = "";
      this.note.keywords = "";
      this.note.text = "";
    };

    this.setFocus = (n) => {
      $window.document.getElementById('field-' + n).focus();
    };

    this.save = () => {
      if (!this.note.text) {
        return false;
      }

      this.note.title = this.note.title.toString() === "" ? "none" : this.note.title;
      this.note.keywords = this.note.keywords.toString() === "" ? "none" : this.note.keywords;
      NoteService.add(this.note);
      NoteService.saveData();
      this._resetForm();
      /* toDo */
      $state.transitionTo('list');
    };
    
    this.setFocus(1);
  }
}

NoteAddController.$inject = ['$state', '$window', 'NoteService', 'ConfigService', 'noteAdd'];

export default NoteAddController;
