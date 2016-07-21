function LoginCtrl ($scope, $rootScope, AuthService, $location, Session){
  Session.destroy();
  $scope.user = {}
  $scope.save = function(){
    AuthService.login($scope.user).then(function (user) {
      if (user.role == "admin"){
        $location.path("/")
      }else{
        $location.path("/profile")
      }
    }, function (result) {
      $scope.error_message = "Invalid Credentials"
    });

  };
}

function LogoutCtrl ($scope, $rootScope, AuthService, $location){
	$scope.user = {}
  AuthService.logout($scope.user).then(function (user) {
    $location.path("/login")
  });
}

LoginCtrl.$inject = ['$scope', '$rootScope', 'AuthService', '$location', 'Session']
LogoutCtrl.$inject = ['$scope', '$rootScope', 'AuthService', '$location']