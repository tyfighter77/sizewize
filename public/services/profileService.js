//fake temporary data - replace when working on backend
//
// var profileData = [
//   {
//     name: 'John',
//     _id: '1',
//     genderTemplate: 'adultMale',
//     region: {
//       head: [
//         {item: 'Height', size: '6\'0"', desc: ''},
//         {item: 'Hat', size: 'M, 7', desc: 'only fitted'},
//         {item: 'Contacts', size: -0.5, desc: 'Acuview'}
//       ],
//       torso: [
//         {item: 'Neck', size: 'L, 16 1/2', desc: ''},
//         {item: 'Chest', size: 'L, 44', desc: ''},
//         {item: 'Shoulders', size: '19', desc: ''},
//         {item: 'T-shirt', size: 'L', desc: 'athletic fit'},
//         {item: 'Suit Jacket', size: '40 Long', desc: ''},
//         {item: 'Dress Shirt', size: '16 1/2', desc: ''}
//       ],
//       arms: [
//         {item: 'Sleeve', size: '35', desc: ''},
//         {item: 'Gloves', size: 'L', desc: ''},
//         {item: 'Ring Finger', size: '8', desc: ''}
//       ],
//       bottoms: [
//         {item: 'Waist', size: 'M, 34', desc: ''},
//         {item: 'Inseam', size: '32', desc: ''},
//         {item: 'Jeans', size: '34 x 32', desc: 'slimfit'},
//         {item: 'Belt', size: 'S, 40', desc: ''},
//         {item: 'Boxers', size: 'M', desc: ''}
//       ],
//       feet: [
//         {item: 'Socks', size: 'M, 11', desc: ''},
//         {item: 'Shoes', size: '10 1/2', desc: ''}
//       ],
//     }
//   },
//   {
//     name: 'Jane',
//     _id: '2',
//     genderTemplate: 'adultFemale',
//     region: {
//       head: [
//         {item: 'Height', size: '5\'4"'}
//       ],
//       torso: [
//         {item: 'Size', size: '4', desc: ''},
//         {item: 'Bust', size: '34', desc: ''}
//       ],
//       arms: [
//         {item: 'Ring Finger', size: '5.5, 16mm', desc: ''}
//       ],
//       bottoms: [
//         {item: 'Waist', size: '26 1/2', desc: ''},
//         {item: 'Hips', size: '37', desc: ''}
//       ],
//       feet: [
//         {item: 'Shoes', size: '5 1/2', desc: ''}
//       ],
//     }
//   },
// ];

angular.module('sizewizeApp')
.service('profileService', function($http){

  this.getProfiles = function(id){
    console.log(id);
    return $http({
      method: 'GET',
      url: '/profile?user=' + id
    })
    .then(function(response){
      return response.data;
    });
  };
  this.getProfile = function(id){
    return $http({
      method: 'GET',
      url: '/profile?_id=' + id
    })
    .then(function(response){
      return response.data;
    });
  };
  this.createProfile = function(profile){
    return $http({
      method: 'POST',
      url: '/profile',
      data: profile
    })
    .then (function(response){
      return response.data;
    });
  };
  this.updateProfile = function(profile, id){
    return $http({
      method: 'PUT',
      url: '/profile/' + id,
      data: profile
    })
    .then (function(response){
      return response.data;
    });
  };
  this.deleteProfile = function(id){
    return $http({
      method: 'DELETE',
      url: '/profile/' + id
    })
    .then (function(response){
      return response.data;
    });
  };
});
