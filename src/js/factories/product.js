angular
  .module('wabisabiApp')
  .factory('Product', Product);

Product.$inject = ['$resource'];
function Product($resource) {
  return new $resource('/api/products/:id', { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
