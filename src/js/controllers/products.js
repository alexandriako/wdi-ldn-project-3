angular
  .module('wabisabiApp')
  .controller('ProductsIndexCtrl', ProductsIndexCtrl);

ProductsIndexCtrl.$inject['Product'];
function ProductsIndexCtrl(Product) {
  const vm = this;
  vm.all = Product.query();    
}
