angular
  .module('wabisabiApp')
  .controller('RegisterCtrl', RegisterCtrl)
  .controller('LoginCtrl', LoginCtrl);

RegisterCtrl.$inject = ['$auth', '$state', '$rootScope'];
function RegisterCtrl($auth, $state, $rootScope) {
  const vm = this;
  vm.user = {};

  function submit() {
    if (vm.registerForm.$valid) {
      $auth.signup(vm.user)
        .then((res) => {
          $rootScope.$broadcast('message', res.data.message);
          $state.go('login');
        })
        .catch(() => $state.go('register'));
    }
  }

  vm.submit = submit;
}

LoginCtrl.$inject = ['$auth', '$state', '$rootScope', 'User'];
function LoginCtrl($auth, $state, $rootScope, User) {
  const vm = this;
  vm.credentials = {};

  function submit() {
    if (vm.loginForm.$valid) {
      $auth.login(vm.credentials)
        .then((res) => {
          $rootScope.$broadcast('message', res.data.message);
          $state.go('productsIndex');
        })
        .catch(() => $state.go('login'));
    }
  }

  vm.submit = submit;

  function authenticate(provider) {
    // console.log(provider);
    $auth.authenticate(provider)
      .then((res) => {
        $rootScope.$broadcast('message', res.data.message);
        const userId = $auth.getPayload().userId;
        const user = User.get({ id: userId });
        if (!user.addressLineOne || !user.addressLineTwo || !user.postCode || !user.city) {
          return $state.go('usersEdit', { id: userId });
        } else {
          $state.go('productsIndex');
        }
      })
      .catch(() => $state.go('login'));
  }
  vm.authenticate = authenticate;
}
