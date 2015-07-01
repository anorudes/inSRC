class NoteAddController {
	constructor($scope, NoteService, $state){
    this._resetForm = () => {
      $scope.note = angular.copy(NoteService.emptyItem);
    }
		$scope.save = () => {
      NoteService.add($scope.note);
      this._resetForm();
      $state.go('list');
    }
    this._resetForm();
	}
}

NoteAddController.$inject = ['$scope', 'NoteService', '$state'];

export default NoteAddController;