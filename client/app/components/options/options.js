import 'angular-ui-router';
import optionsComponent from './options.component';

let optionsModule = angular.module('options', [])
.config(($stateProvider)=>{
  $stateProvider
    .state('options', {
      url: '/options',
      template: '<options></options>',
      resolve: {
        load: (ConfigService) => ConfigService.load()
      }
    });
})
.directive('options', optionsComponent);

export default optionsModule;