(function() {
  angular.module('classifieds')
    .component('newAdForm', {
      templateUrl: "../templates/ads.html",
      controller: NewAdController
    })

    NewAdController.$inject = ['NewAdFormService', 'AdsService']
    function NewAdController(NewAdFormService, AdsService) {
      const vm = this
      vm.navigate = function(e) {
        e.preventDefault()
        $state.go('newAd')
      }
      vm.$onInit = function() {
        AdsService.getAd().then(function(data) {
          console.log(data)
          vm.ads = data
        })
      }
    }
})()
