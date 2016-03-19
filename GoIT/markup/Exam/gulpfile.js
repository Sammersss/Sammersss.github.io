var gulp =      require('gulp');
var sass =      require('gulp-sass');
var concat =    require('gulp-concat');
var rename =    require('gulp-rename');
var notify =    require('gulp-notify');
var uglify =    require('gulp-uglify');
var prefix =    require('gulp-autoprefixer');
var imagemin =  require('gulp-imagemin');
var cleanCSS =  require('gulp-clean-css');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
	gulp.src('')
		.pipe(webserver({
		livereload: true,
		directoryListing: true,
		open: true
	}));
});

//scss

gulp.task('sass', function () {
	gulp.src('src/scss/main.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('src/css'))
		.pipe(notify('SCSS_Done!'));
});

//css

gulp.task('css', function () {
	gulp.src('src/css/*.css')
//		.pipe(concat("styles.css"))
		.pipe(prefix({
			browsers: ['last 2 versions','> 1%', 'ie 9'],
			cascade: false
		}))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(rename("styles.min.css"))
		.pipe(gulp.dest('dist/css'))
		.pipe(notify('CSS_Done!'));
});

//js

gulp.task('jsUglify', function() {
	return gulp.src('src/js/*.js')
		.pipe(concat("script.min.js"))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
		.pipe(notify('JS is DONE!'));
});

//img

gulp.task('imageMin', function() {
	return gulp.src('src/img/*.*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'));
});

//watch

gulp.task('watch', function () {
	gulp.watch('./src/scss/*.scss',['sass']);
	gulp.watch('./src/css/*.css',['css']);
	gulp.watch('./src/js/*.js',['jsUglify']);
	gulp.watch('./src/img/*.*',['imageMin']);
});

//default
gulp.task('default', ['sass' ,'css', 'jsUglify','imageMin', 'webserver', 'watch']);
