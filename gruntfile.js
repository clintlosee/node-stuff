'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
	  	uglify: { // This specifies which plugin we're configuring
	    scripts: { // This is the target. We can specify multiple targets for a single plugin
	      options: { // This is the target specific options. We can also place an options hash at the plugin level to specify configuration for all targets
	        sourceMap: true // This option says that we want a source map printed out
	      },
	      files: { // This is the configuration for the task that specifies destination and source.
	        'public/js/app.min.js': ['src/scripts/**/*.js']
	      }
	    }
	  }
  });

  // This is what we add
  grunt.loadNpmTasks('grunt-contrib-uglify');

};
