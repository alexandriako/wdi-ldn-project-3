angular
.module('wabisabiApp')
.controller('UsersIndexCtrl', UsersIndexCtrl)
.controller('UsersShowCtrl', UsersShowCtrl);


UsersIndexCtrl.$inject = ['User'];
function UsersIndexCtrl(User) {
  const vm = this;
  vm.all = User.query();
}

UsersShowCtrl.$inject = ['User', 'Product', '$stateParams'];
function UsersShowCtrl(User, Product, $stateParams) {
  const vm = this;

  User.get($stateParams)
  .$promise
  .then((user) => {
    vm.user = user;
    vm.products = Product.query({ createdBy: user.id });
  });
  console.log(vm.user);
}
