angular
<<<<<<< HEAD
.module('wabisabiApp')
.directive('base64', base64);

function base64(){
=======
  .module('wabisabiApp')
  .directive('base64', base64);

function base64() {
>>>>>>> e3b88913ffc28aeed1ff00c67514894debf4e664

  const fileReader = new FileReader();

  return {
    restrict: 'A',
    require: 'ngModel',
<<<<<<< HEAD
    link(scope, element, attrs, ngModel) {

      fileReader.onload = function fileLoaded(){
        ngModel.$setViewValue(fileReader.result);
      };
      element.on('change', (e) => {
        const file = (e.target.files || e.dataTransfer.files)[0];
        fileReader.readAsDataURL(file);
        console.log(file);
=======
    link($scope, element, attrs, ngModel) {

      fileReader.onload = function fileLoaded() {
        ngModel.$setViewValue(fileReader.result);
      };

      element.on('change', (e) => {
        const file = (e.target.files || e.dataTransfer.files)[0];
        fileReader.readAsDataURL(file);
>>>>>>> e3b88913ffc28aeed1ff00c67514894debf4e664
      });
    }
  };
}
