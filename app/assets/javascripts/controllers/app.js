function AppCtrl ($scope, $rootScope, $location, $http, $location, AuthService){
  $scope.header = 'partials/header.html'

  $scope.show_error = function(result, notification_required){
    $scope.errors = result.data.errors
    if (result.status == 401){
      $location.path("/login")
    }
  }


  current_user = AuthService.getCurrentUser()
  if (current_user){
  	$rootScope.current_user = current_user;
    $rootScope.is_admin = current_user.role == "admin"
    $rootScope.current_role = current_user.role
    $http.defaults.headers.common['Content-Type'] = "application/json";
  	$http.defaults.headers.common['X-Auth-Token'] = current_user.auth_token;

  }
  else{
  	$location.path("/login")
  }
 
}

AppCtrl.$inject = ['$scope', '$rootScope', '$location', '$http', '$location', 'AuthService']