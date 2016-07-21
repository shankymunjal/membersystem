function HomeCtrl ($scope, $location, $http, $rootScope){
	if ($scope.is_admin){
		$location.path("/users")
	}
}

HomeCtrl.$inject = ['$scope', '$location', '$http', '$rootScope']