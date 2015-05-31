'use strict';

module.exports = function(grunt) {

	function HelloWorld() {
		// console.log("Hello World!");
		grunt.log.writeln("Hello World!");
	}

    // grunt.registerTask('default', function() {
    //     console.log("Hello World");
    // });

	grunt.registerTask('default', 'My default task desciption', HelloWorld);

}