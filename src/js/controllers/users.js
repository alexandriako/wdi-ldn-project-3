angular
.module('wabisabiApp')
.controller('UsersIndexCtrl', UsersIndexCtrl)
.controller('UsersShowCtrl', UsersShowCtrl)
.controller('UsersEditCtrl', UsersEditCtrl);


UsersIndexCtrl.$inject = ['User'];
function UsersIndexCtrl(User) {
  const vm = this;
  vm.all = User.query();
}

UsersShowCtrl.$inject = ['User', 'Product', 'Order', '$stateParams', '$state', '$auth'];
function UsersShowCtrl(User, Product, Order, $stateParams, $state, $auth) {
  const vm = this;

  User.get($stateParams, (user)=>{
    vm.user = user;
    vm.orders = Order.query({ createdBy: $stateParams.id });
    vm.products = Product.query({ createdBy: user.id });
  });


  function userDelete() {
    vm.user
    .$remove()
    .then(() => {
      $auth.logout();
      $state.go('productsIndex');
    });
  }

  vm.delete = userDelete;
}

UsersEditCtrl.$inject = ['User', '$stateParams', '$state'];
function UsersEditCtrl(User, $stateParams, $state) {
  const vm = this;

  vm.user = User.get($stateParams);

  function usersUpdate() {
    vm.user
      .$update()
      .then(() => $state.go('usersShow', $stateParams));
  }

  vm.update = usersUpdate;
}
