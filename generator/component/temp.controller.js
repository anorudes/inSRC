class <%= upCaseName %>Controller {
	constructor($scope){
		$scope.name = '<%= name %>';
	}
}

<%= upCaseName %>Controller.$inject = ['$scope'];

export default <%= upCaseName %>Controller;