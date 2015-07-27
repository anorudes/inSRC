"use strict";

var gui = require('nw.gui');
var win = gui.Window.get();
var fs = require('fs');
var path = require('path');
var nwPath = process.execPath;
var execPath = path.dirname(nwPath).replace(/\\/g,"/") + '/';
if (!fs.existsSync(execPath + 'config.json')) {
  execPath = "";
}
