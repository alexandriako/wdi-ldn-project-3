// app.js is the main JS file which you should define your Angular module
console.log('Hot damn!');
//
angular
  .module('wabisabiApp', ['ui.router', 'ngResource', 'satellizer', 'ui.bootstrap', 'ngAnimate', 'ngMessages', 'ngCart'])
  .controller('cartCtrl', ['$scope', '$http', 'ngCart', function($scope, $http, ngCart) {
    ngCart.setTaxRate(7.5);
    ngCart.setShipping(2.99);
  }]);
  // .config(function() {
  //   Stripe.setPublishableKey('pk_test_ULwvAlGf5PSFbkLqX9gQN8sA');
  // });
