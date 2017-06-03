(function() {
  angular.module('classifieds')
    .service('NewAdFormService', function($http) {
      return {
        newAd: function() {
          return $http.get('/classifieds')
          .then(function(payload) {
            console.log(payload.data)

            return payload.data
          })
        }
      }
    })
})()
