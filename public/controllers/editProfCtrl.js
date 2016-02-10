angular.module('sizewizeApp')
.controller('editProfCtrl', function($scope, $state, close, profile, id, profileService, userId){
  $scope.close = close;
  $scope.profile = {name: profile.name, genderTemplate: profile.genderTemplate, age: profile.age};
  $scope.run = function(updatedProfile){
    console.log(updatedProfile);
    profileService.updateProfile(updatedProfile, id)
    .then(function(response){
      close();
    });
  };
  $scope.delete = function(){
    console.log(id, userId);
    profileService.deleteProfile(id)
    .then(function(response){
      $state.go('profiles', {id: userId});
      close();
    });
  };

});
