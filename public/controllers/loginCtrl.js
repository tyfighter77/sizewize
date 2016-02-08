angular.module('sizewizeApp')
.controller('loginCtrl', function($scope, $state, close){
  $scope.close = close;

  $scope.login = function(){
    $state.go('profiles');
    close();
  };

  $scope.signup = function(){
    $state.go('profiles');
    close();
  };

  $scope.facebook = function(){
    $state.go('profiles');
    close();
  };
});
