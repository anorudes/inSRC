let HotkeysService = angular.module('HotkeysService', [])
.service('HotkeysService', function(ConfigService, $state) {

  this.init = function () {
    let shortcutList = new gui.Shortcut({ key : ConfigService.configData.hotkeyList, active : function() {
      $state.transitionTo('list');
      win.focus();
    }});

    let shortcutAdd = new gui.Shortcut({ key : ConfigService.configData.hotkeyAdd, active : function() {
      $state.transitionTo('add');
      win.focus();
    }});

    gui.App.registerGlobalHotKey(shortcutList);
    gui.App.registerGlobalHotKey(shortcutAdd);
  };

});

export default HotkeysService;