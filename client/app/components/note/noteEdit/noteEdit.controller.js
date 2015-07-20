class NoteEditController {
	constructor($stateParams, $state, $window, NoteService, ConfigService){
    this.wordWrap = ConfigService.configData.wordWrap;
    this.id = $stateParams.id;
    this.note = NoteService.getOne(this.id);
    this.noteEdit = angular.copy(this.note);

    let setFocus = () => {
      $window.document.getElementById('note-code').focus();
    };

    this.update = () => {
      if (!this.note.title) {
        return false;
      }
      NoteService.update(this.note, this.noteEdit);
      NoteService.saveData();
      $state.transitionTo('list');
    };
    this.delete = () => {
      NoteService.delete(this.id);
      NoteService.saveData();
      $state.transitionTo('list');
    };

    setFocus();
	}
}

NoteEditController.$inject = ['$stateParams', '$state', '$window', 'NoteService', 'ConfigService'];

export default NoteEditController;