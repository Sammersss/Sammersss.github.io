module.exports = function(grunt) {

    // 1. Всё конфигурирование тут
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

            // 2. Конфигурация для объединения файлов тут.
        concat: {   
            dist: {
                src: [
                    'js/*.js', // Все JS в папке
                ],
                dest: 'production/js/production.js',
            }
        },
        uglify: {
            build: {
                src: 'production/js/production.js',
                dest: 'production/js/production.min.js'
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'production/img/'
                }]
            }
        },
        concat_css: {
            options: {
            },
            all: {
                src: [
                    'css/*.css'
                ],
                dest: 'production/css/concatenated.css'
            },
        },
        cssmin: {
            target: {
                files: [{ //найти и минифицировать все файлы в папкке
                    expand: true,
                    cwd: 'production/css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'production/css',
                    ext: '.min.css'
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeEmptyAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeRedundantAttributes: true,
                    collapseBooleanAttributes: true
                },
                files: {
                    // Destination : Source
                    'production/index-min.html': 'index.html'
                }
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

    // 3.4 Здесь мы сообщаем Grunt, что мы планируем использовать этот плагин минификации html:
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    // 4. Мы сообщаем Grunt, что нужно делать, когда мы введём "grunt" в терминале.
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin','concat_css','cssmin','htmlmin']);

};