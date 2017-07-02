angular
  .module('wabisabiApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', '$state', '$auth', '$transitions'];
function MainCtrl() {
  const vm = this;
  vm.isNavCollapsed = true;
}
