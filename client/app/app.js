import 'core-js/shim';
import 'angular-ui-router';
import 'angular-animate';
import Common from './common/common';
import Components from './components/components';
import Services from './services/services';
import AppComponent from './app.component';
import Init from './init';

let appModule = angular.module('app', [
  'ngAnimate',
  'ui.router',
  'textAngular',
  'hljs',
  'angularMoment',
  Services.name,
  Common.name,
  Components.name,
  Init.name
])
.config(function (hljsServiceProvider) {
  hljsServiceProvider.setOptions({
    tabReplace: '  ',
  });
})
.directive('app', AppComponent);

angular.element(document).ready(()=> {
  angular.bootstrap(document, [appModule.name]), {
    strictDi: true
  }
});

export default appModule;
