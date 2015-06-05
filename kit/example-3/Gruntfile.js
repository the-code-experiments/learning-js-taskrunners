'use strict';

module.exports = function(grunt) {

    var _config = {};

    function readConfig() {
        _config = grunt.file.readJSON('config.json');

        console.log("Project Name: ", _config.project);
        console.log("Project Version: ", _config.version);
    }

    grunt.registerTask('default', readConfig);

};