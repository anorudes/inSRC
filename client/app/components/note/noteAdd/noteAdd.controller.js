class NoteAddController {
	constructor($state, $window, NoteService, ConfigService){
    this.wordWrap = ConfigService.configData.wordWrap;
    this._resetForm = () => {
      this.note = angular.copy(NoteService.emptyItem);
    };

    let setFocus = () => {
      $window.document.getElementById('note-title').focus();
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
    }
    this._resetForm();
    setFocus();
	}
}

NoteAddController.$inject = ['$state', '$window', 'NoteService', 'ConfigService'];

export default NoteAddController;