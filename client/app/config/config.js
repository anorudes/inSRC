let schemes = [
  'github',
  'tomorrow'
];

let Config = angular.module('Config', [])
.service('ConfigService', function($http, $q) {
  const configPath = nw ? "client/config.json" : "../../config.json";
  const schemesPath = nw ? "client/schemes/" : "schemes/";
  this.configData = {};
  this.schemes = schemes;

  this.style = () => {
    /* inject code scheme style */
    let schemePath = schemesPath + this.configData.scheme;
    $("#scheme-css").html(`<link href="${schemePath}.css" rel="stylesheet">`);
  };

  this.save = (data) => {
    this.configData = data;
    if (nw) {
      fs.writeFile(configPath, JSON.stringify(data));
    }
    this.style();
  };
  
  this.load = () => {
    let defer = $q.defer();
    switch(nw) {
      case true:
        this.configData = JSON.parse(fs.readFileSync(configPath, 'utf8'));
        this.style();
        defer.resolve();
      break;
      case false:
        $http.get(configPath).then((res) => {
          this.configData = res.data;
          this.style();
          defer.resolve();
        });
      break;
    }
    return defer.promise;
  };
})
.run(function(ConfigService) {
  ConfigService.load();
});

export default Config;