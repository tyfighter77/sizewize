angular.module('sizewizeApp')
.controller('editItemCtrl', function($scope, $state, close, region, profile, index, profileService){
$scope.item = {item: profile.region[region][index].item, size: profile.region[region][index].size, desc: profile.region[region][index].desc};

$scope.save = function(item){
profile.region[region][index] = item;
profileService.updateProfile(profile, profile._id)
.then(function(response){
  close();
});
};

$scope.delete = function(){
  profile.region[region].splice(index, 1);
  profileService.updateProfile(profile, profile._id)
  .then(function(resolve){
    close();
  });
};

  $scope.close = close;
});
