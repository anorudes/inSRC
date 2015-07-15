class NoteEditController {
	constructor(NoteService, $stateParams, $state){
    this.id = $stateParams.id;
    this.note = NoteService.getOne(this.id);
    this.update = () => {
      if (!this.note.title) {
        return false;
      }
      NoteService.update(this.id, this.note);
      NoteService.saveData();
      $state.transitionTo('list');
    };
    this.delete = () => {
      NoteService.delete(this.id);
      NoteService.saveData();
      $state.transitionTo('list');
    };
	}
}

NoteEditController.$inject = ['NoteService', '$stateParams', '$state'];

export default NoteEditController;