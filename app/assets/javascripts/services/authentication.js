memberSystem.factory('AuthService', ['$http', 'Session', '$cookieStore', function ($http, Session, $cookieStore ) {
  var authService = {};
 
  authService.login = function (credentials) {
    return $http
      .post('/users/sign_in.json', {"user": credentials})
      .then(function (res) {
        $http.defaults.headers.common['Content-Type'] = "application/json";
      	$http.defaults.headers.common['X-Auth-Token'] = res.data.auth_token;
        Session.create(res.data);
        return res.data;
      });
  };
 
  authService.logout = function (credentials) {
    return $http
      .delete('/users/sign_out.json')
      .then(function (res) {
        $http.defaults.headers.common['X-Auth-Token'] = '';
        Session.destroy();
        return;
      });
  };

  authService.isAuthenticated = function () {
    return !!Session.userId;
  };
 
  authService.isAuthorized = function (authorizedRoles) {
    if (!angular.isArray(authorizedRoles)) {
      authorizedRoles = [authorizedRoles];
    }
    return (authService.isAuthenticated() &&
      authorizedRoles.indexOf(Session.userRole) !== -1);
  };

  authService.getCurrentUser = function(user){
    return $cookieStore.get('current_user')
  }
 
  return authService;
}])

memberSystem.service('Session', ['$cookieStore', '$rootScope', function ($cookieStore, $rootScope) {
  this.create = function (user) {
    this.auth_token = user.auth_token;
    this.id = user.id;
    this.role = user.role;
    this.email = user.email;
  	$cookieStore.put('current_user', this);
    $rootScope.current_user = this;
    $rootScope.is_admin = this.role == "admin"
    $rootScope.current_role = this.role

  };
  this.destroy = function () {
    this.id = null;
    this.auth_token = null;
    this.role = null;
    $cookieStore.remove('current_user');
  };
}])
