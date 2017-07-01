angular
  .module('wabisabiApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('productsIndex', {
      url: '/products',
      templateUrl: 'js/views/products/index.html'
    });
  $urlRouterProvider.otherwise('/');
}
