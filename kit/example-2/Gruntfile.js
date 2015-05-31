'use strict';

module.exports = function(grunt) {

    grunt.registerTask('myName', 'A task to get the name', function(firstName, lastName) {

        if (arguments.length === 0) {
            grunt.log.writeln("No names");
        } else {
            grunt.log.writeln(this.name + ": " + firstName + " " + lastName);
        }

    });

    grunt.registerTask('default', 'myName');

    // grunt.registerTask('default', 'myName', function() {

    // 	grunt.log.writeln("Default task");

    // 	// grunt.task.run('myName');

    // 	// grunt.task.run(['myName']);

    // 	// grunt.task.run('myName:Ashwin:Hegde');
    // });

};