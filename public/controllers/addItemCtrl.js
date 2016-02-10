angular.module("sizewizeApp").controller("addItemCtrl", function($scope, close, profileService, region, profile) {
    $scope.close = close;
    console.log(profile);
    $scope.save = function(item){
      console.log("hello", item);
      profile.region[region].push(item);
      profileService.updateProfile(profile, profile._id)
      .then(function(response){
        console.log(response);
        close(response);
      });
    };
});
