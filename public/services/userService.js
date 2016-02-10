angular.module('sizewizeApp')
  .service('userService', function($http) {

    this.getUsers = function() {
      return $http({
          method: 'GET',
          url: '/user'
        })
        .then(function(response) {
          return response.data;
        });
    };
    this.getUser = function(id) {
      return $http({
          method: 'GET',
          url: '/user?_id=' + id
        })
        .then(function(response) {
          return response.data;
        });
    };
    this.createUser = function(profile) {
      return $http({
          method: 'POST',
          url: '/user',
          data: profile
        })
        .then(function(response) {
          return response;
        });
    };
    this.updateUser = function(profile, id) {
      return $http({
          method: 'PUT',
          url: '/user/' + id,
          data: profile
        })
        .then(function(response) {
          return response.data;
        });
    };
    this.deleteUser = function(id) {
      return $http({
          method: 'DELETE',
          url: '/user/' + id
        })
        .then(function(response) {
          return response.data;
        });
    };
    this.loginUser = function(user){
      return $http({
          method: 'GET',
          url: '/user?email=' + user.email + '&password=' + user.password
        })
        .then(function(response) {
          console.log(response);
          return response;
        });
    };
  });
