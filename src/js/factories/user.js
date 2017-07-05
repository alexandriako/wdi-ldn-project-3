angular
  .module('wabisabiApp')
  .factory('User', User);

User.$inject = ['$resource'];
function User($resource) {
  return new $resource('api/users/:id', { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
