class NoteShowController {
  constructor(NoteService, $stateParams) {
    this.note = NoteService.getOne($stateParams.id);
  }
}

NoteShowController.$inject = ['NoteService', '$stateParams'];

export default NoteShowController;
