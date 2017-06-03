(function() {
  'use strict'

  angular.module('classifieds')
    .config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'home',
        url: '/',
        component: 'ads'
      })
      .state({
        name: 'newAd',
        url: '/newAd',
        component: 'newAdForm'
      })
  }
})()
