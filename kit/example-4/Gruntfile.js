/**
 *  The goal of this file is to provide the basic understanding:
 *  -> How to configure jshint task (3rd party npm).
 *
 *  How to run this example.
 *  1. Locate to this folder and execute the command `grunt` or `grunt default`.
 */

module.exports = function(grunt) {

    "use strict";

    /**
     *  grunt initialize configuration.
     */
    grunt.initConfig({
        jshint: {
            src: ['js/**/*.js']
        }
    });

    /**
     *  Load npm tasks.
     */
    grunt.loadNpmTasks('grunt-contrib-jshint');

    /**
     *  Register jshint task as default task.
     */
    grunt.registerTask('default', ['jshint']);

};