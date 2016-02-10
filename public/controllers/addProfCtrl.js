angular.module("sizewizeApp").controller("addProfCtrl", function($scope, close, profileService, userId) {
    $scope.close = close;

    $scope.run = function(profile){
      profile.user = userId;
      profileService.createProfile(profile)
      .then(function(response){
        close();
      });
    };
});
