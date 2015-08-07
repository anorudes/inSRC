class NotePreviewController {
  constructor(NoteService, ConfigService, ngDialog, $scope) {
    this.wordWrap = ConfigService.configData.wordWrap;

    $scope.delete = () => {
      NoteService.delete(this.note.id);
      this.closePreview();
    };

    this.deleteModal = () => {
      var nestedConfirmDialog = ngDialog.openConfirm({
        template:'\
            <p>Would you like to delete?</p>\
            <div class="ngdialog-buttons">\
                <button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">No</button>\
                <button type="button" class="ngdialog-button ngdialog-button-primary" ng-click="delete(); closeThisDialog(0)">Yes</button>\
            </div>',
        scope: $scope,
        plain: true
      });
      return nestedConfirmDialog;
    };

  }
}
NotePreviewController.$inject = ['NoteService', 'ConfigService', 'ngDialog', '$scope'];
export default NotePreviewController;
