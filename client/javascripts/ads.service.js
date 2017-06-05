(function() {
  angular.module('classifieds')
    .service('AdsService', function($http) {
      return {
        getAd: function() {
          return $http.get('/api/classifieds')
          .then(function(payload) {

            return payload.data
          })
        },
        addPost: function(newAd) {
          console.log('slskjdflj', newAd)
          return $http.post('/api/classifieds', newAd)
          .then(function(postData) {
            console.log('postData= ', postData.data)
            return postData.data
          })
        },
        delete: function(post) {
          console.log('post for delet= ', post.id)
          console.log('AdsService.delete')
          return $http.delete(`/api/classifieds/${post.id}`, post)
        },
        update: function(newData) {
          console.log('service data id= ', newData)
          let obj = {id: newData.id,
            title: newData.title,
            description: newData.description,
            price: newData.price,
            item_image: newData.item_image }
          return $http.patch(`/api/classifieds/${newData.id}`, obj)
        }
      }
    })
})()
