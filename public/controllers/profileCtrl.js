angular.module('sizewizeApp')
.controller('profileCtrl', function($scope, $state, profileService, ModalService, profile, profileId, userId){
  $scope.profile = profile[0];
  console.log(profile);

  $scope.mannequinImg = "../images/AM-body.png";


  $scope.goToProfs = function(){
    $state.go('profiles', {id: userId});
  };
  $scope.logout = function(){
    $state.go('welcome');
  };
  $scope.openProfModal = function(){
    ModalService.showModal({
      templateUrl: './views/editProfTmpl.html',
      controller: 'editProfCtrl',
      inputs: {id : profileId, profile : $scope.profile, userId: userId}
    }).then(function(modal){
      modal.close.then(function(){
        $scope.getProfile();
      });
    });
  };

  $scope.openItemModal = function(){
    console.log('works');
    ModalService.showModal({
      templateUrl: './views/editItemTmpl.html',
      controller: 'addItemCtrl',
      inputs: {region : $scope.region, profile : $scope.profile}
    }).then(function(modal){
      modal.close.then(function(profile){
        $scope.getProfile();
      });
    });
  };

  $scope.openEditItemModal = function(i){
    console.log('works');
    ModalService.showModal({
      templateUrl: './views/editItemTmpl.html',
      controller: 'editItemCtrl',
      inputs: {region : $scope.region, profile : $scope.profile, index: i}
    }).then(function(modal){
      modal.close.then(function(profile){
        $scope.getProfile();
      });
    });
  };

  $scope.getProfile = function(){
    profileService.getProfile(profileId)
    .then(function(response){
      $scope.profile = response[0];
      console.log(response);
    });
  };

});
