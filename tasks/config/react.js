module.exports = function(grunt) {

  grunt.config.set('react', {
    dev: {
      options: {
        bare: true,
        sourceMap: true,
        sourceRoot: './'
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

  grunt.loadNpmTasks('grunt-react');
};