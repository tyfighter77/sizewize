angular.module('sizewizeApp', ['ui.router','angularModalService'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('welcome', {
      url: '/',
      templateUrl: './views/welcomeTmpl.html',
      controller: 'mainCtrl'
    })
    .state('profiles', {
      url: '/profiles/:id',
      templateUrl: './views/profilesTmpl.html',
      controller: 'profilesCtrl',
      resolve: {
        profiles: function(profileService, $stateParams){
          console.log($stateParams.id);
          return profileService.getProfiles($stateParams.id);
        },
        userId: function($stateParams){
          return $stateParams.id;
        }
      }
    })
    .state('profile', {
      url: '/profile/:user/:id',
      templateUrl: './views/profileTmpl.html',
      controller: 'profileCtrl',
      resolve: {
        profile: function(profileService, $stateParams){
          return profileService.getProfile($stateParams.id);
        },
        profileId: function($stateParams){
          return $stateParams.id;
        },
        userId: function($stateParams){
          return $stateParams.user;
        }
      }
    });
    $urlRouterProvider.otherwise('/');
});
