class NoteAddController {
	constructor($state, $window, NoteService, ConfigService){
    this.wordWrap = ConfigService.configData.wordWrap;
    this._resetForm = () => {
      this.note = angular.copy(NoteService.emptyItem);
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
    }
    this._resetForm();
    this.setFocus(1);
	}
}

NoteAddController.$inject = ['$state', '$window', 'NoteService', 'ConfigService'];

export default NoteAddController;