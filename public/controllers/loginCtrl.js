angular.module('sizewizeApp')
.controller('loginCtrl', function($scope, $state, close, userService){
  $scope.close = close;

  $scope.login = function(user){
    userService.loginUser(user)
    .then(function(response){
      if (response.status != 200){
        return;
      }
      console.log(response);
      $state.go('profiles', {id:response.data[0]._id});
      close();
    });
  };

  $scope.signup = function(user){
    userService.createUser(user)
    .then(function(response){
      if (response.status != 200){
        return;
      }
      console.log(response);
      $state.go('profiles', {id:response.data._id});
      close();
    });
  };

  $scope.facebook = function(){
    $state.go('profiles');
    close();
  };
});
