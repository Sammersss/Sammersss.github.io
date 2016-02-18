module.exports = function(grunt) {

	// 1. Всё конфигурирование тут
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

			// 2. Конфигурация для объединения файлов тут.
		concat: {
			dist: {
				src: [
					'src/js/script.js', // Все JS в папке
					'src/js/jquery.orbit.min.js',
				],
				dest: 'js/scriptmain.js',
			}
		},
		uglify: {
			build: {
				src: 'js/scriptmain.js',
				dest: 'js/script_main.min.js'
			}
		},
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'src/img/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'img/'
				}]
			}
		},
		concat_css: {
			options: {
			},
			all: {
				src: [
					'src/css/*.css'
				],
				dest: 'css/concatenated.css'
			}
		},
		cssmin: {
			target: {
				files: [{ //найти и минифицировать все файлы в папкке
					expand: true,
					cwd: 'css/',
					src: ['*.css', '!*.min.css'],
					dest: 'css',
					ext: '.min.css'
				}]
			}
		},
		sass: {
			dist: {
			  files: [{
				expand: true,
				cwd: 'src/css',
				src: ['style.scss'],
				dest: 'src/css',
				ext: '.css'
			}]
			}
		},
		watch: {
			sass: {
			  // We watch and compile sass files as normal but don't live reload here
				files: ['src/css/style.scss'],
				tasks: ['sass','concat_css','cssmin'],
			},
			scripts: {
				files: ['src/js/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					spawn: false,
				},
			}
		}
	});

	// 3. Здесь мы сообщаем Grunt, что мы планируем использовать этот плагин:
	grunt.loadNpmTasks('grunt-contrib-concat');

	// 3.1 Здесь мы сообщаем Grunt, что мы планируем использовать этот плагин:
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// 3.2 Здесь мы сообщаем Grunt, что мы планируем использовать этот плагин оптимизации изображений:
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	// 3.3 Здесь мы сообщаем Grunt, что мы планируем использовать этот плагин конкатенации css:
	grunt.loadNpmTasks('grunt-concat-css');

	// 3.3.1 Здесь мы сообщаем Grunt, что мы планируем использовать этот плагин минификации css:
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	//4. Здесь мы сообщаем Grunt, что мы планируем использовать этот плагин  sass
	grunt.loadNpmTasks('grunt-contrib-sass');

	//5. Здесь мы сообщаем Grunt, что мы планируем использовать этот плагин grunt-contrib-watch.
	grunt.loadNpmTasks('grunt-contrib-watch');

	// 6. Мы сообщаем Grunt, что нужно делать, когда мы введём "grunt" в терминале.
	grunt.registerTask('default', ['concat', 'uglify', 'imagemin','concat_css','cssmin','sass' ]);

};
