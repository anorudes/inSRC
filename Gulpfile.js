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
    autoprefixer = require('gulp-autoprefixer');

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

gulp.task('build', function() {
	var dist = path.join(paths.dist + 'app.js');
	// Use JSPM to bundle our app
	return jspm.bundleSFX(resolveToApp('app'), dist, {})
		.then(function() {
			// Also create a fully annotated minified copy
			return gulp.src(dist)
				.pipe(ngAnnotate())
				.pipe(uglify())
				.pipe(rename('app.min.js'))
				.pipe(gulp.dest(paths.dist))
		})
		.then(function() {
			// Inject minified script into index
		  return gulp.src('client/index.html')
				.pipe(htmlreplace({
					'js': 'app.min.js'
				}))
				.pipe(gulp.dest(paths.dist));
		});
});

gulp.task('sass', function() {
    return gulp.src('./client/css/*.scss').pipe(sourcemaps.init()).pipe(sass({
        errLogToConsole: false,
        onError: function(err) {
            return notify().write(err);
        }
    })).pipe(minifyCss({
        compatibility: 'ie8'
    }))
    .pipe(autoprefixer({
        browsers: ['last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'ios 6', 'android 4'],
        cascade: false
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./client/css'));
});


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

gulp.task('watch', function() {
    gulp.watch(['./client/css/**/*.scss'], ['sass']);
});

gulp.task('default', ['serve', 'sass', 'watch'])