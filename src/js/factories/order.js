angular
  .module('wabisabiApp')
  .factory('Order', Order);

Order.$inject = ['$resource'];
function Order($resource) {
  return new $resource('api/orders/:id', { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
