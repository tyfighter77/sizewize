angular.module('sizewizeApp')
.controller('profilesCtrl', function($scope, $state, tempService, ModalService){

  $scope.profiles = tempService.getProfiles();
  $scope.goToProf = function(profile){
    $state.go('profile', {id:profile._id});
  };
  $scope.logout = function(){
    $state.go('welcome');
  };
  $scope.openProfModal = function(){
    console.log('works');
    ModalService.showModal({
      templateUrl: './views/editProfTmpl.html',
      controller: 'editProfCtrl'
    }).then(function(modal){
      modal.close.then(function(){

      });
    });
  };

});
