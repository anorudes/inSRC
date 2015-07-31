import template from './notePreview.html!text';
import controller from './notePreview.controller';

let notePreviewComponent = () => {
  return {
    template,
    controller,
    restrict: 'E',
    controllerAs: 'vm',
    scope: {
      note: "=",
      stretchToggle: "&",
      closePreview: "&"
    },
    bindToController: true
  };
};

export default notePreviewComponent;
