module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		babel: {
			options: {
				sourceMap: false,
				presets: ['es2015']
		},
		dist: {
			files: [{
				expand: true,
				cwd: 'js/src',
				src: ['*.js'],
				dest: 'js/dist',
				ext: '.js',
				extDot: 'first'
			}]
			}
		},
		concat: {
			dist: {
				src: [
					'js/dist/main.js',
					'js/dist/function.js', // Все JS в папке
				],
				dest: 'js/dist/script.js',
			}
		},
		uglify: {
			build: {
				src: 'js/dist/script.js',
				dest: 'js/dist/script.min.js'
			}
		},
		watch: {
			babel: {
				// We watch and compile babel files as normal
				files: 'js/src/*.js',
				tasks: ['babel']
			},
			scripts: {
				files: ['js/dist/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					spawn: false,
				},
			}
		}
	});

	grunt.registerTask('default', ['babel','concat','uglify']);

};
