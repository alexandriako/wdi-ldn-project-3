angular
  .module('wabisabiApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', '$state', 'ngCart', '$auth', '$transitions', 'User'];
function MainCtrl($rootScope, $state, ngCart, $auth, $transitions, User) {
  const vm = this;
  vm.isNavCollapsed = true;

  vm.isAuthenticated = $auth.isAuthenticated;

  $rootScope.$on('error', (e, err) => {
    vm.message = err.data.message;
    if(err.status === 401) {
      if(vm.pageName !== 'login') vm.stateHasChanged = false;
      $state.go('login');
    } else if(err.status === 404) {
      vm.stateHasChanged = false;
      $state.go('productsIndex');
    }
  });

  $rootScope.$on('message', (e, message) => {
    vm.stateHasChanged = false;
    vm.message = message;
  });

  $transitions.onSuccess({}, (transition) => {
    vm.pageName = transition.$to().name;
    if(vm.stateHasChanged) vm.message = null;
    if(!vm.stateHasChanged) vm.stateHasChanged = true;
    vm.isNavCollapsed = true;

    if($auth.getPayload()) {
      vm.currentUserId = $auth.getPayload().userId;
      User.get({ id: vm.currentUserId })
        .$promise
        .then((user) => {
          vm.currentUser = user;
          vm.profileComplete = checkProfileComplete();
        });
    }
  });

  function checkProfileComplete() {
    return !!vm.currentUser.addressLineOne && !!vm.currentUser.addressLineTwo && !!vm.currentUser.postCode && !!vm.currentUser.city;
  }

  function logout() {
    $auth.logout();
    ngCart.empty(true);
    $state.go('login');
  }

  vm.logout = logout;
}
