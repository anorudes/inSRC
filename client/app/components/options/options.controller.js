class OptionsController {
	constructor(ConfigService, $state){
    let data = ConfigService.configData;

    this.schemes = ConfigService.schemes;
    this.scheme = ConfigService.configData.scheme;
    this.wordWrap = data.wordWrap;
    this.save = () => {
      data.scheme = this.scheme;
      data.wordWrap = this.wordWrap;
      ConfigService.save();
      $state.transitionTo('list');
    };
	}
}

OptionsController.$inject = ['ConfigService', '$state'];
export default OptionsController;