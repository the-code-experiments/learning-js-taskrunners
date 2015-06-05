"use strict";

module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            options: {
                
            },
            src: ['js/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint']);

};