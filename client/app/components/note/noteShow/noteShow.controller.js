class NoteShowController {
	constructor($scope, NoteService, $stateParams){
		$scope.note = NoteService.getOne($stateParams.id);
	}
}

NoteShowController.$inject = ['$scope','NoteService', '$stateParams'];

export default NoteShowController;
