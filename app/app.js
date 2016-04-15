(function() {

    'use strict';

    // Declare app level module which depends on views, and components
    angular
        .module('kantar', [
            'ui.router',
            'ngAnimate',
            'angularLazyImg',

            'login',
            'base',
            'dashboard'
        ])
        .config(['$urlRouterProvider', '$locationProvider', initializeConfigurationPhase]);

    function initializeConfigurationPhase($urlRouterProvider, $locationProvider) {
        // $locationProvider.html5Mode(true);
        // $locationProvider.html5Mode({
        //          enabled: true,
        //          requireBase: false
        //   });
        $urlRouterProvider.otherwise('/login');
    }

})();
