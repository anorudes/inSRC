import 'core-js/shim';
import 'angular-ui-router';
import 'angular-animate';
import Common from './common/common';
import Components from './components/components';
import Services from './services/services';
import AppComponent from './app.component';
import Config from './config/config';

let appModule = angular.module('app', [
  'ngAnimate',
  'ui.router',
  'textAngular',
  'hljs',
  'angularMoment',
  Services.name,
  Common.name,
  Components.name,
  Config.name
])
.config(function (hljsServiceProvider) {
  hljsServiceProvider.setOptions({
    tabReplace: '  ',
  });
})
.directive('app', AppComponent)
.run(function(ConfigService, $rootScope, $timeout) {
  /* load config */
  ConfigService.load();

  /* fix materialize-css label */
  $(document).on('click', '.input-field label', function() {
    $(this).parent().find('input').focus();
  });
  
  // ***************************************************************************
  // save scroll for list page
  // ***************************************************************************
  /* ToDo */
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
});

angular.element(document).ready(()=> {
  angular.bootstrap(document, [appModule.name]), {
    strictDi: true
  }
});

export default appModule;
