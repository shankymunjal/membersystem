function UsersIndexCtrl ($scope, $rootScope, $location, $window, User, notificationService){
	$scope.usersTabActive = 'active'
	$scope.get_users = function(){
		User.all().then(function(result){
			$scope.users = result.users
		}, function(result){
			$scope.show_error(result)
		})
	}
	$scope.destroy = function(user) {
	    var deleteUser = $window.confirm('Are you sure you want to delete this user?');

	    if (deleteUser) {
	    	User.delete(user.id).then(function(result){
	      		$scope.get_users()
	    	})
	    }
	};
	$scope.get_users()
}
UsersIndexCtrl.$inject = ['$scope', '$rootScope', '$location', '$window', 'User', 'notificationService']

function UsersEditCtrl ($scope, $routeParams, User, $location){
	$scope.save = function(){
		User.update($scope.user, $scope.addresses).then(function(result){
			$location.path("/")
		})
	}
	if ($routeParams.id){
		$scope.user_id = $routeParams.id
	}else{
		$scope.user_id = $scope.current_user.id
	}
	User.find($scope.user_id).then(function(result){
		$scope.user = result.data.user
		$scope.addresses = result.data.addresses
	})

	$scope.addAddress = function(){
		$scope.addresses.push({})
	}
	$scope.removeAddress = function(index){
		$scope.addresses.splice(index, 1)
	}
}

UsersEditCtrl.$inject = ['$scope', '$routeParams', 'User', '$location']

function UsersNewCtrl ($scope, $routeParams, User, $location){
	$scope.save = function(){
		User.save($scope.user, $scope.addresses).then(function(result){
			$location.path("/users")
		})
	}
	$scope.addAddress = function(){
		$scope.addresses.push({})
	}
	$scope.removeAddress = function(index){
		$scope.addresses.splice(index, 1)
	}
	$scope.user = {}
}

UsersNewCtrl.$inject = ['$scope', '$routeParams', 'User', '$location']
