"use strict";

var gui = require('nw.gui');
var win = gui.Window.get();
var fs = require('fs');
var path = require('path');
var execPath = gui.App.dataPath.replace(/\\/g,"/") + '/';

