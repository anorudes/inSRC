let skins = [
  "red",
  "blue",
  "white"
];

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

let ConfigService = angular.module('ConfigService', [])
.service('ConfigService', function($http, $q) {
  const serverURL = 'http://127.0.0.1:4000/config/';
  const configPath = nw ? "config.json" : "../../config.json";
  const schemesPath = nw ? "client/schemes/" : "schemes/";
  const skinsPath = nw ? "client/css/skins/" : "css/skins/";
  this.configData = {};
  this.schemes = schemes;
  this.skins = skins;

  let changeSkin = () => {
    let skinPath = skinsPath + this.configData.skin;
    let $skinSection = $("#skin-css");
    let stylesheet = `<link href="${skinPath}.css" rel="stylesheet">`;
    $skinSection.html('');
    if (this.configData.skin != "red" && $skinSection.html() != stylesheet) {
      $skinSection.html(stylesheet);
    }
    $('body').show();
  }

  let changeScheme = () => {
    /* inject code scheme style */
    let schemePath = schemesPath + this.configData.scheme;
    $("#scheme-css").html(`<link href="${schemePath}.css" rel="stylesheet">`);
  };

  this.save = () => {
    if (nw) {
      fs.writeFile(configPath, JSON.stringify(this.configData));
    } else {
      $http.post(serverURL + 'update', {data: this.configData});
    }
    changeScheme();
    changeSkin();
  };
  
  this.load = async () => {
    let defer = $q.defer();
    if (nw) {
      this.configData = JSON.parse(fs.readFileSync(execPath + configPath, 'utf8'));
      changeScheme();
      changeSkin();
      defer.resolve();
    } else {
      let res = await $http.get(configPath);
      this.configData = res.data;
      changeScheme();
      changeSkin();
      defer.resolve();
    }
    return defer.promise;
  };
});

export default ConfigService;