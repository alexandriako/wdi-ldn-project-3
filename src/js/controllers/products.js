angular
.module('wabisabiApp')
.controller('ProductsIndexCtrl', ProductsIndexCtrl)
.controller('ProductsNewCtrl', ProductsNewCtrl)
.controller('ProductsShowCtrl', ProductsShowCtrl)
.controller('ProductsEditCtrl', ProductsEditCtrl)
.controller('ProductsDeleteCtrl', ProductsDeleteCtrl);


ProductsIndexCtrl.$inject['Product'];
function ProductsIndexCtrl(Product) {
  const vm = this;
  vm.all = Product.query();
}


ProductsNewCtrl.$inject = ['Product', '$state'];
function ProductsNewCtrl(Product, $state) {
  const vm = this;
  vm.product = {};

  function productsCreate() {
    Product
    .save(vm.product)
    .$promise
    .then(() => $state.go('productsIndex'));
  }

  vm.create = productsCreate;
}

ProductsShowCtrl.$inject = ['Product', '$stateParams', '$state', '$uibModal', '$http'];
function ProductsShowCtrl(Product, $stateParams, $state, $uibModal, $http) {
  const vm = this;

  Product.get($stateParams)
  .$promise
  .then((product) => {
    vm.product = product;
    getCountryData(vm.product.origin);
  });

  function getCountryData(origin){
    console.log(origin);
    $http.get(`https://restcountries.eu/rest/v2/name/${origin}`)
    .then((response) => {
      console.log(response);
    });
  }

  function openModal() {
    $uibModal.open({
      templateUrl: 'js/views/partials/productDeleteModal.html',
      controller: 'ProductsDeleteCtrl as productsDelete',
      resolve: {
        currentProduct: () => {
          return vm.product;
        }
      }
    });
  }

  vm.open = openModal;

}

ProductsEditCtrl.$inject = ['Product', '$stateParams', '$state'];
function ProductsEditCtrl(Product, $stateParams, $state) {
  const vm = this;

  vm.product = Product.get($stateParams);

  function productsUpdate() {
    vm.product
    .$update()
    .then(() => $state.go('productsShow', $stateParams));
  }
  
  vm.update = productsUpdate;
}

ProductsDeleteCtrl.$inject = ['$uibModalInstance', 'currentProduct', '$state'];
function ProductsDeleteCtrl($uibModalInstance, currentProduct, $state) {
  const vm = this;
  vm.product = currentProduct;

  function closeModal() {
    $uibModalInstance.close();
  }

  vm.close = closeModal;

  function productsDelete() {
    vm.product
    .$remove()
    .then(() => {
      $state.go('productsIndex');
      $uibModalInstance.close();
    });
  }

  vm.delete = productsDelete;
}
