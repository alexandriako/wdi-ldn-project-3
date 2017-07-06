// angular
//   .module('wabisabiApp')
//   .controller('cartCtrl', ['$scope', '$http', 'ngCart', function($scope, $http, ngCart) {
//     ngCart.setTaxRate(7.5);
//     ngCart.setShipping(2.99);
//   }]);

angular
.module('wabisabiApp')
.controller('CartCtrl', CartCtrl);

CartCtrl.$inject = ['$state', '$rootScope', 'ngCart'];

function CartCtrl($state, $rootScope, ngCart) {
  ngCart.setTaxRate(20);
  ngCart.setShipping(4.99);
}
