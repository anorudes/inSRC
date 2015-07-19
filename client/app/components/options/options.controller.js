class OptionsController {
	constructor(ConfigService, $state){
    this.schemes = ConfigService.schemes;
    this.data = ConfigService.configData;
    this.save = () => {
      ConfigService.save(this.data);
      $state.transitionTo('list');
    };
	}
}

OptionsController.$inject = ['ConfigService', '$state'];
export default OptionsController;