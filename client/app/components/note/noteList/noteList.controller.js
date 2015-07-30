import beautify from '../../../../vendor/beautify/init';

/* TODO */
let rhtmlspecialchars = (str) => {
  if (typeof(str) === "string") {
    str = str.replace(/&gt;/ig, ">");
    str = str.replace(/&lt;/ig, "<");
    str = str.replace(/&#039;/g, "'");
    str = str.replace(/&nbsp;/g, " ");
    str = str.replace(/&quot;/ig, '"');
    str = str.replace(/&amp;/ig, '&'); /* must do &amp; last */
  }
  return str;
};

class NoteListController {
  constructor($window, $scope, NoteService, userFilter, notePreview, ConfigService) {
    this.userFilter = userFilter;
    this.notes = NoteService.getAll();
    $scope.notePreview = notePreview;
    this.stretch = false;
    this.searchLimit = ConfigService.configData.searchLimit;

    this.stretchToggle = () => {
      this.stretch = !this.stretch;
    };

    this.showPreview = (note) => {
      $scope.notePreview.note = note;
      $scope.notePreview.note.text = rhtmlspecialchars($scope.notePreview.note.text);
      
      if (ConfigService.configData.beautify) {
        $scope.notePreview.note.text = ConfigService.configData.beautify ? beautify($scope.notePreview.note.text) : $scope.notePreview.note.text;
      }
    };

    this.closePreview = () => {
      $scope.notePreview.note = false;
      $scope.$apply();
    }

    $window.document.getElementById('search').focus();
  }
}

NoteListController.$inject = ['$window', '$scope', 'NoteService', 'userFilter', 'notePreview', 'ConfigService'];

export default NoteListController;
