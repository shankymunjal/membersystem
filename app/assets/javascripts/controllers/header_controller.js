function HeaderCtrl ($scope, $rootScope, $location, $http){
  $scope.current_user = $rootScope.current_user
  $scope.is_admin = $scope.current_user.role == "admin"
  $scope.current_role = $scope.current_user.role
  
}

HeaderCtrl.$inject = ['$scope', '$rootScope', '$location', '$http']