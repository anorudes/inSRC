let schemes = [
  'agate',
  'androidstudio',
  'arta',
  'ascetic',
  'atelier-cave.dark',
  'atelier-cave.light',
  'atelier-dune.dark',
  'atelier-dune.light',
  'atelier-estuary.dark',
  'atelier-estuary.light',
  'atelier-forest.dark',
  'atelier-forest.light',
  'atelier-heath.dark',
  'atelier-heath.light',
  'atelier-lakeside.dark',
  'atelier-lakeside.light',
  'atelier-plateau.dark',
  'atelier-plateau.light',
  'atelier-savanna.dark',
  'atelier-savanna.light',
  'atelier-seaside.dark',
  'atelier-seaside.light',
  'atelier-sulphurpool.dark',
  'atelier-sulphurpool.light',
  'brown_paper',
  'codepen-embed',
  'color-brewer',
  'dark',
  'darkula',
  'default',
  'docco',
  'far',
  'foundation',
  'github-gist',
  'github',
  'googlecode',
  'hybrid',
  'idea',
  'ir_black',
  'kimbie.dark',
  'kimbie.light',
  'magula',
  'mono-blue',
  'monokai',
  'monokai_sublime',
  'obsidian',
  'paraiso.dark',
  'paraiso.light',
  'pojoaque',
  'railscasts',
  'rainbow',
  'school_book',
  'solarized_dark',
  'solarized_light',
  'sunburst',
  'tomorrow-night-blue',
  'tomorrow-night-bright',
  'tomorrow-night-eighties',
  'tomorrow-night',
  'tomorrow',
  'vs',
  'xcode',
  'zenburn'
];

let Config = angular.module('Config', [])
.service('ConfigService', function($http, $q) {
  const serverURL = 'http://127.0.0.1:4000/config/';
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
    } else {
      $http.post(serverURL + 'update', {data: data});
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