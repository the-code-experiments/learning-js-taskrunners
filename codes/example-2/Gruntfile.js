/**
 *  The goal of this file is to provide the basic understanding:
 *  -> How to register a custom task with arguments.
 *
 *  How to run this example.
 *  1. Locate to this folder and execute the command `grunt` or `grunt default`.
 */

module.exports = function(grunt) {

    "use strict";

    /**
     *  @task: Custom task.
     *  @params: firstName, lastName
     */
    grunt.registerTask('myName', 'A task to get the name', function(firstName, lastName) {

        /**
         *  Check the length of the arguments.
         */
        if (arguments.length === 0) {
            grunt.log.writeln("Unknown");
        } else {
            grunt.log.writeln(this.name + ": " + firstName + " " + lastName);
        }

    });

    /**
     *  Register the custom task `myName` to default task.
     *  Execute the task `myName` without arguments.
     */
    // grunt.registerTask('default', 'myName');

    /**
     *  Register the custom task `myName` to default task.
     *  Execute the task `myName` with arguments.
     */
    // grunt.registerTask('default', 'myName:Ashwin:Hegde');

    grunt.registerTask('default', 'myName', function() {
        grunt.task.run('myName');
        grunt.task.run(['myName']);
        grunt.task.run('myName:Ashwin:Hegde');
    });

};