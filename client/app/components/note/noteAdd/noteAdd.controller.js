class NoteAddController {
	constructor(NoteService, $state){
    this._resetForm = () => {
      this.note = angular.copy(NoteService.emptyItem);
    }
		this.save = () => {
      NoteService.add(this.note);
      NoteService.saveData();
      this._resetForm();
      $state.go('list');
    }
    this._resetForm();
	}
}

NoteAddController.$inject = ['NoteService', '$state'];

export default NoteAddController;