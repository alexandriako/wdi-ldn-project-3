angular
.module('wabisabiApp')
.config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('productsIndex', {
    url: '/products',
    templateUrl: 'js/views/products/index.html',
    controller: 'ProductsIndexCtrl as productsIndex'
  })
  .state('productsNew', {
    url: '/products/new',
    templateUrl: 'js/views/products/new.html',
    controller: 'ProductsNewCtrl as productsNew'
  })
  .state('productsShow', {
    url: '/products/:id',
    templateUrl: 'js/views/products/show.html',
    controller: 'ProductsShowCtrl as productsShow'
  })
  .state('productsEdit', {
    url: '/products/:id/edit',
    templateUrl: 'js/views/products/edit.html',
    controller: 'ProductsEditCtrl as productsEdit'
  })
  .state('cart', {
    url: '/cart',
    templateUrl: 'js/views/checkout/cart.html',
    controller: 'CartCtrl as cart'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'js/views/auth/login.html',
    controller: 'LoginCtrl as login'
  })
  .state('register', {
    url: '/register',
    templateUrl: 'js/views/auth/register.html',
    controller: 'RegisterCtrl as register'
  })
  .state('checkout', {
    url: '/checkout',
    templateUrl: 'js/views/stripe/index.html',
    controller: 'StripeCtrl as checkout'
  });
  $urlRouterProvider.otherwise('/products');
}
