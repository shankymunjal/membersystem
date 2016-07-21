var memberSystem = angular.module('memberSystem',['ngCookies', 'templates', 'jlareau.pnotify']);

memberSystem.config(memberRouter);
memberSystem.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);

function memberRouter ($routeProvider, $locationProvider, $httpProvider) {
	$routeProvider
		.when('/', {controller: HomeCtrl, templateUrl:'home.html'})
		.when('/users', {controller: UsersIndexCtrl, templateUrl:'users/index.html'})
		.when('/users/new', {controller: UsersNewCtrl, templateUrl:'users/edit.html'})
		.when('/users/:id/edit', {controller: UsersEditCtrl, templateUrl:'users/edit.html'})
		.when('/profile', {controller: UsersEditCtrl, templateUrl:'users/edit.html'})
		.when('/login', {controller: LoginCtrl, templateUrl:'login.html'})
		.when('/logout', {controller: LogoutCtrl, templateUrl:'login.html'});
	$locationProvider.html5Mode(true);
}	


memberRouter.$inject = ['$routeProvider', '$locationProvider', '$httpProvider']