/**
 *	The goal of this file is to provide the basic understanding:
 *	-> Using default task.
 *
 *	How to run this example.
 *	1. Locate to this folder and execute the command `grunt` or `grunt default`.
 */

module.exports = function(grunt) {

    "use stric";

    /**
     *	@function: print "Hello World" on console.
     */
    function HelloWorld() {

        /**
         *	Either use console.log or using Grunt's log api to print text on console.
         */
        // console.log("Hello World!");
        grunt.log.writeln("Hello World! from HelloWorld function");
    }

    /**
     *	Register the custom callback function to default task.
     */
    grunt.registerTask('default', function() {
        grunt.log.writeln("Hello World! from callback function");

    });

    /**
     *	Register the custom function to default task.
     */
    //grunt.registerTask('default', 'My default task desciption', HelloWorld);

}