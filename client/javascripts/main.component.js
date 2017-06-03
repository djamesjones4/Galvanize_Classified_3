(function() {
  angular.module('classifieds')
  .component('main', {
    templateUrl: '../index.html', //PARENT TEMPLETE
    controller: MainController
  })

  function MainController() {
    const vm = this
    vm.$onInit = onInit
    function onInit() {

    }
  }
})()
