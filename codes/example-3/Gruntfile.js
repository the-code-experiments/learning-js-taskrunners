/**
 *  The goal of this file is to provide the basic understanding:
 *  -> How to read JSON file and use it as configuration of objects/settings.
 *
 *  How to run this example.
 *  1. Locate to this folder and execute the command `grunt` or `grunt default`.
 */

module.exports = function(grunt) {

    "use strict";

    var _config = {};

    /**
     *	@function: read the JSON file and display the values.
     */
    function readConfig() {

        /**
         *	@function: read the JSON file and display the values.
         */
        _config = grunt.file.readJSON('config.json');

        console.log("Project Name: ", _config.project);
        console.log("Project Version: ", _config.version);
    }

    grunt.registerTask('default', readConfig);

};