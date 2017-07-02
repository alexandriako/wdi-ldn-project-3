angular
  .module('wabisabiApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'ngCart', '$state', '$auth', '$transitions'];
function MainCtrl() {
  const vm = this;
  vm.isNavCollapsed = true;
}
