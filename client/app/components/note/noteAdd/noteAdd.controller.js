class NoteAddController {
	constructor(NoteService, $state){
    this._resetForm = () => {
      this.note = angular.copy(NoteService.emptyItem);
    }
		this.save = () => {
      NoteService.add(this.note);
      NoteService.saveData();
      this._resetForm();
      /* toDo */
      setTimeout(function() {
        $state.transitionTo('list');
      }, 10);
    }
    this._resetForm();
	}
}

NoteAddController.$inject = ['NoteService', '$state'];

export default NoteAddController;