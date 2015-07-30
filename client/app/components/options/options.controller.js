class OptionsController {
  constructor(ConfigService, $state) {
    let data = ConfigService.configData;

    this.schemes = ConfigService.schemes;
    this.skins = ConfigService.skins;
    this.scheme = data.scheme;
    this.minimize = data.minimizeOnStart;
    this.tray = data.tray;
    this.wordWrap = data.wordWrap;
    this.hotkeyList = data.hotkeyList;
    this.hotkeyAdd = data.hotkeyAdd;
    this.searchLimit = data.searchLimit;
    this.beautify = data.beautify;
    this.skin = data.skin;

    this.save = () => {
      data.scheme = this.scheme;
      data.wordWrap = this.wordWrap;
      data.minimizeOnStart = this.minimize;
      data.tray = this.tray;
      data.beautify = this.beautify;
      data.hotkeyList = this.hotkeyList;
      data.hotkeyAdd = this.hotkeyAdd;
      data.searchLimit = this.searchLimit;
      data.skin = this.skin;
      ConfigService.save();
      $state.transitionTo('list');
    };
  }
}

OptionsController.$inject = ['ConfigService', '$state'];
export default OptionsController;
