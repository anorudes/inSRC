class NoteAddController {
	constructor(NoteService, $state, ConfigService){
    this.wordWrap = ConfigService.configData.wordWrap;
    this._resetForm = () => {
      this.note = angular.copy(NoteService.emptyItem);
    }

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
	}
}

NoteAddController.$inject = ['NoteService', '$state', 'ConfigService'];

export default NoteAddController;