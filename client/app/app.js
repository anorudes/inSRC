import angular from 'angular';
import 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import Services from './services/services';
import AppComponent from './app.component';

let appModule = angular.module('app', [
	'ui.router',
	Services.name,
	Common.name,
	Components.name
])
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
