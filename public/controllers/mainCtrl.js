angular.module('sizewizeApp')
.controller('mainCtrl', function($scope, ModalService){
  $scope.openLoginModal = function() {
    ModalService.showModal({
      templateUrl: './views/loginTmpl.html',
      controller: 'loginCtrl'
    }).then(function(modal){
      modal.close.then(function() {

      });
    });
  };
});
