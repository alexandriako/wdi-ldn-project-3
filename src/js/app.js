// app.js is the main JS file which you should define your Angular module
console.log('Hot damn!');

angular
  .module('wabisabiApp', ['ui.router', 'ngResource', 'satellizer', 'ui.bootstrap', 'ngAnimate', 'ngMessages']);
  // .constant('API_URL', 'http://localhost:7000')
  // .config(function() {
  //   Stripe.setPublishableKey('pk_test_ULwvAlGf5PSFbkLqX9gQN8sA');
  // });
