'use strict';

var gulp =        require('gulp'),
	rimraf =      require('rimraf'),
	gutil =       require('gulp-util'),
	sass =        require('gulp-sass'),
	watch =       require('gulp-watch'),
	rigger =      require('gulp-rigger'),
	notify =      require('gulp-notify'),
	uglify =      require('gulp-uglify'),
	concat =      require('gulp-concat'),
	rename =      require('gulp-rename'),
	plumber =     require('gulp-plumber'),
	browserSync = require('browser-sync'),
	imagemin =    require('gulp-imagemin'),
	filesize =    require('gulp-filesize'),
	cssmin =      require('gulp-clean-css'),
	sourcemaps =  require('gulp-sourcemaps'),
	googlecdn =    require('gulp-google-cdn'),
	prefixer =    require('gulp-autoprefixer'),
	pngquant =    require('imagemin-pngquant'),
	reload =      browserSync.reload;


var path = {
	build: { //Тут мы укажем куда складывать готовые после сборки файлы
		html: 'build/',
		js: 'build/js/',
		css: 'build/css/',
		img: 'build/img/',
		fonts: 'build/fonts/'
	},
	src: { //Пути откуда брать исходники
		html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
		js: 'src/js/main.js',//В стилях и скриптах нам понадобятся только main файлы
		style: 'src/style/main.scss',
		img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
		fonts: 'src/fonts/**/*.*'
	},
	watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
		html: 'src/**/*.html',
		js: 'src/js/**/*.js',
		style: 'src/style/**/*.scss',
		img: 'src/img/**/*.*',
		fonts: 'src/fonts/**/*.*'
	},
	clean: './build'
};


var config = {
	server: {
		baseDir: "./build"
	},
	tunnel: true,
	host: 'localhost',
	port: 9000,
	logPrefix: "Fe_ArtAlex"
};


gulp.task('webserver', function () {
	browserSync(config);
});


gulp.task('clean', function (cb) {
	rimraf(path.clean, cb);
});


gulp.task('html:build', function () {
	gulp.src(path.src.html) //Выберем файлы по нужному пути
		.pipe(plumber())
		.pipe(rigger()) //Прогоним через rigger
		.pipe(googlecdn(require('./bower.json')))
		.pipe(gulp.dest(path.build.html)) //Выплюнем их в папку build
		.pipe(notify('HTML is DONE!'))
		.pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});


gulp.task('js:build', function () {
	gulp.src(path.src.js) //Найдем наш main файл
		.pipe(rigger()) //Прогоним через rigger
		.pipe(sourcemaps.init()) //Инициализируем sourcemap
//		.pipe(plumber())
		.pipe(uglify()) //Сожмем наш js
		.on("error", notify.onError({
		message: "Error: <%= error.message %>",
		title: "Error running JS"
		}))
		.pipe(sourcemaps.write()) //Пропишем карты
		.pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
		.pipe(filesize())
		.pipe(notify('JS is DONE!'))
		.pipe(reload({stream: true})); //И перезагрузим сервер
});


gulp.task('style:build', function () {
	gulp.src(path.src.style) //Выберем наш main.scss
		.pipe(sourcemaps.init()) //То же самое что и с js
//		.pipe(plumber())
		.pipe(sass()) //Скомпилируем? и присмотрим за ошибками
//		.pipe(sass().on('error',sass.logError))
		.on("error", notify.onError({
		message: "Error: <%= error.message %>",
		title: "Error running JS"
		}))
		.pipe(prefixer()) //Добавим вендорные префиксы
		.pipe(cssmin()) //Сожмем
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(path.build.css)) //И в build
		.pipe(notify('CSS_Done!'))
		.pipe(reload({stream: true}));
});


gulp.task('image:build', function () {
	gulp.src(path.src.img) //Выберем наши картинки
		.pipe(imagemin({ //Сожмем их
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()],
		interlaced: true
	}))
		.pipe(gulp.dest(path.build.img)) //И бросим в build
		.pipe(notify('IMG is MINIFY!'))
		.pipe(reload({stream: true}));
});


gulp.task('fonts:build', function() {
	gulp.src(path.src.fonts)
		.pipe(gulp.dest(path.build.fonts))
});


gulp.task('build', [
	'html:build',
	'js:build',
	'style:build',
	'fonts:build',
	'image:build'
]);


gulp.task('watch', function(){
	watch([path.watch.html], function(event, cb) {
		gulp.start('html:build');
	});
	watch([path.watch.style], function(event, cb) {
		gulp.start('style:build');
	});
	watch([path.watch.js], function(event, cb) {
		gulp.start('js:build');
	});
	watch([path.watch.img], function(event, cb) {
		gulp.start('image:build');
	});
	watch([path.watch.fonts], function(event, cb) {
		gulp.start('fonts:build');
	});
	watch([path.watch.fonts], function(event, cb) {
		gulp.start('fonts:build');
	});
});



gulp.task('default', ['build', 'webserver', 'watch'], function() {
	return gutil.log('Gulp is running!')
});
