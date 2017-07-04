angular
.module('wabisabiApp')
.controller('UsersIndexCtrl', UsersIndexCtrl)
.controller('UsersShowCtrl', UsersShowCtrl);


UsersIndexCtrl.$inject = ['User'];
function UsersIndexCtrl(User) {
  const vm = this;
  vm.all = User.query();
}

UsersShowCtrl.$inject = ['User', 'Product', 'Order', '$stateParams'];
function UsersShowCtrl(User, Product, Order, $stateParams) {
  const vm = this;

  User.get($stateParams)
  .$promise
  .then((user) => {
    vm.user = user;
    vm.orders = Order.query({ createdBy: $stateParams.id });
    vm.products = Product.query({ createdBy: user.id });
  });
  console.log(vm.user);
}
