/* global Stripe */
angular
  .module('wabisabiApp', ['ui.router', 'ngResource', 'satellizer', 'ui.bootstrap', 'ngAnimate', 'ngMessages', 'ngCart'])
  .controller('cartCtrl', ['$scope', '$http', 'ngCart', function($scope, $http, ngCart) {
    ngCart.setTaxRate(20);
    ngCart.setShipping(4.99);
  }])
  .config(function() {
    Stripe.setPublishableKey('pk_test_ULwvAlGf5PSFbkLqX9gQN8sA');
  });
