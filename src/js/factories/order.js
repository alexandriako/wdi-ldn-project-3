angular
  .module('wabisabiApp')
  .factory('Order', Order)
  .factory('OrderProduct', OrderProduct);

Order.$inject = ['$resource'];
function Order($resource) {
  return new $resource('/api/orders/:id', { id: '@id' }, {
    update: { method: 'PUT' }
  });
}

OrderProduct.$inject = ['$resource'];
function OrderProduct($resource) {
  return new $resource('/api/orders/:orderId/products/:id', { id: '@id' }, {
    update: { method: 'PUT', params: { id: '@id', orderId: '@orderId' } }
  });
}
