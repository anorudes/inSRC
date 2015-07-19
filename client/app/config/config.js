let Config = angular.module('Config', [])
.service('ConfigService', function($http) {
  const configPath = "../../config.json";
  const schemesPath = nw ? "client/schemes/" : "schemes/";
  this.configData = { };

  this.style = () => {
    /* inject code scheme style */
    let schemePath = schemesPath + this.configData.scheme;
    $("body").append(`<link href="${schemePath}.css" rel="stylesheet">`);
  };
  this.load = () => {
    switch(nw) {
      case true:
        this.configData = JSON.parse(fs.readFileSync(configPath, 'utf8'));
        this.style();
      break;
      case false:
        $http.get(configPath).success((data) => {
          this.configData = data;
          this.style();
        });
      break;
    }
  };
})
.run(function(ConfigService) {
  ConfigService.load();
});

export default Config;