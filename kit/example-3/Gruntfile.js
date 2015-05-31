'use strict';

module.exports = function(grunt) {

    grunt.initConfig({

        log: {
            one: [1, 2, 3],
            two: "Hello World",
            three: true,
            four: {
                five: function() {
                    grunt.log.writeln("Hi");
                },
                six: function() {
                	grunt.log.writeln("Welcome");
                }
            }
        }

    });

    grunt.registerMultiTask('log', 'Log stuff', function() {
        grunt.log.writeln(this.target + ": " + this.data + "\n");

        if (this.target === 'four') {
        	console.log(this.data);

        	// for(var d in this.data) {
        	// 	console.log(this.data[d]());
        	// }

        	for(var d in this.data) {
        		console.log(this.data['five']());

        		console.log(this.data['six']());
        	}
        }
    });

    grunt.registerTask('default', 'log');
};