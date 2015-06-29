class <%= upCaseName %>Controller {
	constructor($scope){
		$scope.name = '<%= name %>';
	}
}

CartShowController.$inject = ['$scope'];

export default <%= upCaseName %>Controller;