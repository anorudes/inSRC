var $ = require('gulp-load-plugins')();

var gulp	 		  = require('gulp'),
		path			  = require('path'),
		jspm 				= require('jspm'),
		rename		  = require('gulp-rename'),
		template	  = require('gulp-template'),
		uglify	 		= require('gulp-uglify'),
		htmlreplace = require('gulp-html-replace'),
		ngAnnotate  = require('gulp-ng-annotate'),
		serve			  = require('browser-sync'),
		yargs			  = require('yargs').argv,
    sourcemaps  = require('gulp-sourcemaps'),
    sass        = require('gulp-sass'),
    minifyCss   = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    shell = require('gulp-shell'),
    notify = require("gulp-notify"),
    NwBuilder = require('node-webkit-builder'),
    gutil = require('gulp-util'),
    clean = require('gulp-clean'),
    merge = require('merge-stream'),
    runSequence = require('run-sequence');

var nw = !!$.util.env.nw;

var root = 'client';

// helper method to resolveToApp paths
var resolveTo = function(resolvePath) {
	return function(glob) {
		glob = glob || '';
		return path.join(root, resolvePath, glob);
	}
};

var resolveToApp = resolveTo('app'); // app/{glob}
var resolveToComponents = resolveTo('app/components'); // app/components/{glob}

// map of all our paths
var paths = {
	js: resolveToApp('**/*.js'),
	css: resolveToApp('**/*.css'),
	html: [
		resolveToApp('**/*.html'),
		path.join(root, 'index.html')
	],
	blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**'),
	dist: path.join(__dirname, 'dist/')
};

gulp.task('serve', function(){
	serve({
		port: process.env.PORT || 3000,
		open: false,
		files: [].concat(
			[paths.js],
			[paths.css],
			paths.html
		),
		server: {
			baseDir: root,
			// serve our jspm dependencies with the client folder
			routes: {
				'/jspm.config.js': './jspm.config.js',
				'/jspm_packages': './jspm_packages'
			}
		},
	});
});

// ***************************************************************************
// Sass
// ***************************************************************************

gulp.task('sass', function() {
    return gulp.src('client/css/styles.scss').pipe(sourcemaps.init()).pipe(sass()
    .on('error', function(err) {
        notify().write(err);
        this.emit("end");
    }))
    .pipe(autoprefixer({
        browsers: ['last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'ios 6', 'android 4'],
        cascade: false
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('client/css'));
});

// ***************************************************************************
// Generate component
// ***************************************************************************


gulp.task('component', function(){
	var cap = function(val){
		return val.charAt(0).toUpperCase() + val.slice(1);
	};
	
	var name = yargs.name;
	var parentPath = yargs.parent || '';
	var destPath = path.join(resolveToComponents(), parentPath, name);
	
	return gulp.src(paths.blankTemplates)
		.pipe(template({
			name: name,
			upCaseName: cap(name)
		}))
		.pipe(rename(function(path){
			path.basename = path.basename.replace('temp', name);
		}))
		.pipe(gulp.dest(destPath));
});


gulp.task('nw', nw && shell.task([
  'nw .'
]));

gulp.task('dataServer', !nw && shell.task([
  'node ./server/bin/www'
]));

// ***************************************************************************
// Build Task "gulp build"
// ***************************************************************************

gulp.task('build', function() {
  runSequence('build-clean', 'build-copy', 'build-jspm', 'build-app', 'buld-clean-temp', 'copy-config');
});

gulp.task('buld-clean-temp', function () {
    return gulp.src(['build-temp/client'], {read: false})
        .pipe(clean());
});

gulp.task('copy-config', function () {
  var config = gulp.src('config.json').pipe(gulp.dest('binary/inSRC/win64/'))
  var db = gulp.src('db/**/*').pipe(gulp.dest('binary/inSRC/win64/db/'))
  return merge(config, db);
});

gulp.task('build-app', function () {
    var nw = new NwBuilder({
        version: '0.11.0',
        files: './build-temp/**',
        buildDir: './binary',
        platforms: ['win64']
    });
    
    nw.on('log', function (msg) {
        gutil.log('node-webkit-builder', msg);
    });
    
    return nw.build().catch(function (err) {
        gutil.log('node-webkit-builder', err);
    });
});

gulp.task('build-jspm', shell.task([
    'jspm bundle-sfx client/app/app build-temp/build.js'
]));

gulp.task('build-copy', function() {
  gulp.src(['client/**/*', '!client/app/**/*', '!client/*.*']).pipe(gulp.dest('build-temp/client/'));
});

gulp.task('build-clean', function () {
    return gulp.src(['build-temp/client/css', 'build-temp/client/schemes', 'build-temp/vendor', 'build-temp/bower_components'], {read: false})
        .pipe(clean());
});

// ***************************************************************************
// Watch
// ***************************************************************************

gulp.task('watch', function() {
    gulp.watch(['./client/css/**/*.scss'], ['sass']);
});

gulp.task('default', ['serve', 'sass', 'dataServer', 'nw', 'watch'])