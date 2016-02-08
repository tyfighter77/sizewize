angular.module('sizewizeApp')
.controller('profileCtrl', function($scope, $state, tempService, ModalService, profile){
  $scope.profile = profile;

  $scope.mannequinImg = "../images/AM-body.png";

  $scope.showRegion = function(region) {
    $scope.mannequinImg = '../images/AM-' + region + '.png';
  };

  $scope.profiles = tempService.getProfiles();
  $scope.goToProfs = function(){
    $state.go('profiles');
  };
  $scope.logout = function(){
    $state.go('welcome');
  };
  $scope.openProfModal = function(){
    ModalService.showModal({
      templateUrl: './views/editProfTmpl.html',
      controller: 'editProfCtrl'
    }).then(function(modal){
      modal.close.then(function(){

      });
    });
  };

  $scope.openItemModal = function(){
    console.log('works');
    ModalService.showModal({
      templateUrl: './views/editItemTmpl.html',
      controller: 'editProfCtrl'
    }).then(function(modal){
      modal.close.then(function(){

      });
    });
  };

});
