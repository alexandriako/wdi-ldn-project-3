angular
.module('wabisabiApp')
.controller('ProductsIndexCtrl', ProductsIndexCtrl)
.controller('ProductsNewCtrl', ProductsNewCtrl)
.controller('ProductsShowCtrl', ProductsShowCtrl)
.controller('ProductsEditCtrl', ProductsEditCtrl)
.controller('ProductsDeleteCtrl', ProductsDeleteCtrl);


ProductsIndexCtrl.$inject = ['Product', 'Carousel'];
function ProductsIndexCtrl(Product, Carousel) {
  const vm = this;
  vm.all = Product.query();

  function setCategory(category) {
    vm.category = category;
    vm.q = '';
  }

  vm.setCategory = setCategory;

  Carousel.query()
  .$promise
  .then(data =>{

    vm.more = data;
    vm.myInterval = 5000;
    vm.noWrapSlides = false;
    vm.active = 0;

  });

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

ProductsShowCtrl.$inject = ['Product', '$stateParams', '$state', '$http', '$uibModal'];
function ProductsShowCtrl(Product, $stateParams, $state, $http, $uibModal) {
  const vm = this;

  Product.get($stateParams)
  .$promise
  .then((product) => {
    vm.product = product;
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

  vm.openModal = openModal;

}

ProductsEditCtrl.$inject = ['Product', '$stateParams', '$state'];
function ProductsEditCtrl(Product, $stateParams, $state) {
  const vm = this;

  vm.product = Product.get($stateParams);

  function productsUpdate() {

    vm.product.createdBy = vm.product.createdBy.id;

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
    // console.log(currentProduct.createdBy.id);
  }

  vm.close = closeModal;


  function productsDelete() {

    vm.product
    .$remove()
    .then(() => {

      $state.go( 'productsIndex' );

      $uibModalInstance.close();
    });
  }

  vm.delete = productsDelete;
}
