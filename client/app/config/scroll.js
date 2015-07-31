let ScrollService = angular.module('ScrollService', [])
.service('ScrollService', function($rootScope, $timeout) {

  this.init = () => {
    let listScrollY = 0;

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      if (fromState.name === 'list') {
        listScrollY = $(window).scrollTop();
      }
    });

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      if (toState.name === 'list') {
        $timeout(function() {
          window.scrollTo(0, listScrollY);
        });
      }
    });
  };

});

export default ScrollService;