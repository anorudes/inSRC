export function scroll($rootScope, $timeout) {
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
        let searchText = document.getElementById('searchText');
        searchText.nextSibling.nextSibling.className = "";
        if (searchText.value != '') {
          searchText.nextSibling.nextSibling.className = "active";
        }
      });
    }
  });
};
