var path = require('path');

module.exports = function(grunt) {

    grunt.initConfig({
        express: {
            options: {
                port: 8080,
                debug: true,
                spawn: true
            },
            server: {
                options: {
                    script: 'server.js'
                }
            }
        },
        livereload: {
            options: {
              server: path.resolve('server.js'),
              livereload: true,
              serverreload: true,
              bases: [path.resolve('*/*.js')]
            }
        },
        watch: {
            options: {
                livereload: true
            },
            js: {
                files: ['*/*.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['express','watch']);
};