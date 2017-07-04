angular
.module('wabisabiApp')
.controller('UsersIndexCtrl', UsersIndexCtrl)
.controller('UsersShowCtrl', UsersShowCtrl);


UsersIndexCtrl.$inject = ['User'];
function UsersIndexCtrl(User) {
  const vm = this;
  vm.all = User.query();
}

UsersShowCtrl.$inject = ['User', 'Order', '$stateParams'];
function UsersShowCtrl(User, Order, $stateParams) {
  const vm = this;

  User.get($stateParams)
  .$promise
  .then((user) => {
    vm.user = user;
    vm.orders = Order.query({ createdBy: $stateParams.id });
  });


}
