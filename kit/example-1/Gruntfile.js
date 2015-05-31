module.exports = function(grunt) {

	function HelloWorld() {
		console.log("Hello World!");
	}

    // grunt.registerTask('default', function() {
    //     console.log("Hello World");
    // });

	grunt.registerTask('default', HelloWorld);

}