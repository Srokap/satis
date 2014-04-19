module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
      build: {
        command: 'php bin/satis build satis.json',
        options: {
          stdout: true
        }
      }
    },
    watch: {
      files: ['satis.json', 'views/*'],
      tasks: ['shell:build']
    }
  });

  // Load the plugin that provides the "shell" task.
  grunt.loadNpmTasks('grunt-shell');

  // Load the plugin that provides the "watch" task.
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['shell']);

};