import 'core-js/shim';
import 'angular-ui-router';
import 'angular-animate';
import Common from './common/common';
import Components from './components/components';
import Services from './services/services';
import AppComponent from './app.component';

let appModule = angular.module('app', [
  'ngAnimate',
  'ui.router',
  'textAngular',
  'hljs',
  'angularMoment',
  Services.name,
  Common.name,
  Components.name
])
.config(function (hljsServiceProvider) {
  hljsServiceProvider.setOptions({
    tabReplace: '  ',
    
  });
})
.directive('app', AppComponent);

/*
 * As we are using ES6 with Angular 1.x we can't use ng-app directive
 * to bootstrap the application as modules are loaded asynchronously.
 * Instead, we need to bootstrap the application manually
 */

angular.element(document).ready(()=> {
  angular.bootstrap(document, [appModule.name]), {
    strictDi: true
  }
});

export default appModule;
