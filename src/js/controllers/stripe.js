/* global Stripe */

angular
.module('wabisabiApp')
.controller('StripeCtrl', StripeCtrl);

StripeCtrl.$inject = ['$http', 'ngCart'];
function StripeCtrl($http, ngCart) {

  var vm = this;
  vm.card = {};
  vm.payee = null;
  vm.amount = (ngCart.totalCost() - ngCart.getTax()).toFixed(2);
  vm.currency = 'gbp';
  vm.paymentSuccessful = false;
  vm.total = (ngCart.totalCost() - ngCart.getTax()).toFixed(2);

  vm.pay = function pay() {
    Stripe.card.createToken(vm.card, (status, response) => {

      if(status === 200) {
        var data = {
          card: vm.card,
          token: response.id,
          amount: vm.total,
          currency: vm.currency,
          payee: vm.payee,
          items: ngCart.getItems(),
          addressLineOne: 'blahblahblahblah',
          addressLineTwo: 'blahblahblahblah 2 2 2'
        };

        $http
        .post('/api/payment', data)
        .then(function(res) {
          vm.paymentSuccessful = (res.status === 200);
          ngCart.empty(true);

        });
      }

    });

  };

  vm.reset = function reset() {
    vm.card = {};
    vm.payee = '';
    vm.amount = null;
    vm.paymentSuccessful = false;
    vm.Form.$setPristine(true);
    // use vanilla JS to reset form to remove browser's native autocomplete highlighting
    document.querySelector('form').reset();
  };
}
