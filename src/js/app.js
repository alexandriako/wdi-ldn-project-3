// app.js is the main JS file which you should define your Angular module
console.log('Hot damn!');
//
angular
<<<<<<< HEAD
.module('wabisabiApp', ['ui.router', 'ngResource', 'satellizer', 'ui.bootstrap', 'ngAnimate', 'ngCart'])
// .constant('API_URL', 'http://localhost:4000')
// .config(function() {
//   Stripe.setPublishableKey('pk_test_ULwvAlGf5PSFbkLqX9gQN8sA');
// });


.controller('myCtrl', ['$scope', '$http', 'ngCart', function($scope, $http, ngCart) {
  ngCart.setTaxRate(7.5);
  ngCart.setShipping(2.99);
}]);
=======
  .module('wabisabiApp', ['ui.router', 'ngResource', 'satellizer', 'ui.bootstrap', 'ngAnimate', 'ngMessages']);
  // .constant('API_URL', 'http://localhost:7000')
  // .config(function() {
  //   Stripe.setPublishableKey('pk_test_ULwvAlGf5PSFbkLqX9gQN8sA');
  // });
>>>>>>> development
