class NoteAddController {
  constructor($state, $window, NoteService, ConfigService, noteAdd) {
    this.wordWrap = ConfigService.configData.wordWrap;
    this.note = noteAdd.note;

    if (this.note.title !== undefined && this.note.title !== "") {
      document.getElementById('title-label').className = "active";
    }

    if (this.note.keywords !== undefined && this.note.keywords !== "") {
      document.getElementById('keywords-label').className = "active";
    }

    this._resetForm = () => {
      this.note.title = "";
      this.note.keywords = "";
      this.note.text = "";
    };

    this.setFocus = (n) => {
      $window.document.getElementById('field-' + n).focus();
    };

    this.save = () => {
      if (!this.note.title) {
        return false;
      }
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
