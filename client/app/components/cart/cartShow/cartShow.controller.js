class CartShowController {
	constructor($scope, CartService, $stateParams){
		$scope.cart = CartService.getOne($stateParams.id);
	}
}

CartShowController.$inject = ['$scope','CartService', '$stateParams'];

export default CartShowController;
