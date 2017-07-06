angular
  .module('wabisabiApp')
  .factory('Carousel', Carousel);

Carousel.$inject = ['$resource'];
function Carousel($resource) {
  return new $resource('api/carousels/:id', { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
