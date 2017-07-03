angular
.module('wabisabiApp')
.controller('ProductsIndexCtrl', ProductsIndexCtrl)
.controller('ProductsNewCtrl', ProductsNewCtrl)
.controller('ProductsShowCtrl', ProductsShowCtrl)
.controller('ProductsEditCtrl', ProductsEditCtrl)
.controller('ProductsDeleteCtrl', ProductsDeleteCtrl);


ProductsIndexCtrl.$inject = ['Product'];
function ProductsIndexCtrl(Product) {
  const vm = this;
  vm.all = Product.query();

  vm.myInterval = 5000;
  vm.noWrapSlides = false;
  vm.active = 0;
<<<<<<< HEAD
  console.log(vm.all);
  function filterProducts() {
    const params = { name: vm.q };
    vm.filtered = filterFilter(vm.all, params);
  }
  $scope.$watch(() => vm.q, filterProducts);
=======
>>>>>>> e3b88913ffc28aeed1ff00c67514894debf4e664
}


ProductsNewCtrl.$inject = ['Product', '$state'];
function ProductsNewCtrl(Product, $state) {
  const vm = this;
  vm.product = {};

  function productsCreate() {
    if(vm.newForm.$valid) {
      Product
        .save(vm.product)
        .$promise
        .then(() => $state.go('productsIndex'));
    }
  }
  vm.create = productsCreate;
}

ProductsShowCtrl.$inject = ['Product', '$stateParams', '$state', '$uibModal', '$http'];
function ProductsShowCtrl(Product, $stateParams, $state, $uibModal) {
  const vm = this;

  Product.get($stateParams)
  .$promise
  .then((product) => {
    vm.product = product;
    // console.log(vm.product);
  });


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
