angular.module('sizewizeApp')
  .controller('profilesCtrl', function($scope, $state, profileService, ModalService, userId, profiles) {

    $scope.profiles = profiles;
    console.log(userId);
    $scope.getProfiles = function() {
      profileService.getProfiles(userId)
        .then(function(response) {
          $scope.profiles = response;
          console.log(response);
        });
    };
    console.log('what?', $scope.profiles);

    $scope.goToProf = function(profile) {
      $state.go('profile', {
        id: profile._id,
        user: userId
      });
    };
    $scope.logout = function() {
      $state.go('welcome');
    };
    $scope.openProfModal = function() {

      ModalService.showModal({
        templateUrl: './views/editProfTmpl.html',
        controller: 'addProfCtrl',
        inputs: {
          userId: userId
        }
      })
      .then(function(modal) {
        modal.close.then(function() {
          $scope.getProfiles();
        });
      });
    };

    $scope.toggleGender = function(gender){
      $scope.gender = gender;
      console.log(gender);
    };



  });
