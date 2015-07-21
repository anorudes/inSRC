import 'angular-ui-router';
import notePreviewComponent from './notePreview.component';

let notePreviewModule = angular.module('notePreview', [])
.directive('notePreview', notePreviewComponent);

export default notePreviewModule;
