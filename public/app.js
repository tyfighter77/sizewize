angular.module('sizewizeApp', ['ui.router','angularModalService'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('welcome', {
      url: '/',
      templateUrl: './views/welcomeTmpl.html',
      controller: 'mainCtrl'
    })
    .state('profiles', {
      url: '/profiles',
      templateUrl: './views/profilesTmpl.html',
      controller: 'profilesCtrl'
    })
    .state('profile', {
      url: '/profile/:id',
      templateUrl: './views/profileTmpl.html',
      controller: 'profileCtrl',
      resolve: {
        profile: function(tempService, $stateParams){
          return tempService.getProfile($stateParams.id);
        }
      }
    });
    $urlRouterProvider.otherwise('/');
});
