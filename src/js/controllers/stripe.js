/* global Stripe */

angular
.module('wabisabiApp')
.controller('StripeCtrl', StripeCtrl);

StripeCtrl.$inject = ['$http', 'ngCart'];
function StripeCtrl($http, ngCart) {
  var vm = this;

  vm.card = {};
  vm.payee = null;
  vm.amount = null;
  vm.currency = 'gbp';
  vm.paymentSuccessful = true;
  vm.total = ngCart.totalCost();


  vm.pay = function pay() {
    Stripe.card.createToken(vm.card, (status, response) => {
      if(status === 200) {
        var data = {
          card: vm.card,
          token: response.id,
          amount: vm.amount,
          currency: vm.currency,
          payee: vm.payee
        };
        console.log('This is the response ', response);
        // console.log('Payee', vm.payee);
        // console.log('amount', vm.amount);

        $http
        .post('/api/payment', data)
        .then(function(res) {
          vm.paymentSuccessful = (res.status === 200);

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
