import 'angular-ui-router';
import <%= name %>Component from './<%= name %>.component';

let <%= name %>Module = angular.module('<%= name %>', [])
.directive('<%= name %>', <%= name %>Component);

export default <%= name %>Module;