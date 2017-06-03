(function() {
  angular.module('classifieds')
    .component('ads', {

      controller: AdsController,
      templateUrl: "../templates/ads.html"
    })

  AdsController.$inject = ['AdsService', 'NewAdFormService']
  function AdsController(AdsService) {
    const vm = this
    vm.navigate = function(e) {
      e.preventDefault()
      $state.go('newAd')
    }
    vm.ad = []
    vm.ads = []
    vm.$onInit = function() {
      AdsService.getAd().then(function(data) {
        vm.ads = data
      })
    }
    vm.postAdded = function() {
      // console.log('vm.ad= ', vm.ad)
      AdsService.addPost(vm.ad)
      .then((result) => {
        console.log('adding post')
        AdsService.getAd().then(function(data) {
          vm.ads = data
        })
      })
    }
    vm.deleteAd = function(id) {
      console.log('vm.ad= ', id.id)
      return AdsService.delete(id)
      .then((refresh) => {
        AdsService.getAd().then(function(data) {
          vm.ads = data
        })
      })
    }

    vm.toggle= function(ad, $index) {
      console.log('ad= ', ad)

      ad[$index] = !ad[$index]
      vm.editForm = angular.copy(ad)
    }

    vm.editPost = function(post) {
      console.log('post= ', post)
      AdsService.update(vm.editForm)
      .then((refresh) => {
        AdsService.getAd().then(function(data) {
          vm.ads = data
        })
      })
    }
  }
})()
