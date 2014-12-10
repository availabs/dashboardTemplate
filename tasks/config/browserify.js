module.exports = function(grunt) {

  grunt.config.set('browserify', {
    dev: {
      options: {
        transform:  [ require('grunt-react').browserify ]
      },
      files: [{
        expand: true,
        cwd: 'assets/',
        src: ['**/*.jsx'],
        dest: '.tmp/public/',
        ext: '.js'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
};

