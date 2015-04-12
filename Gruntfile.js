module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    express: {
      dev: {
        options: {
          port: 3000,
          script: 'server.js'
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      configFiles: {
          files: [ 'Gruntfile.js'],
          options: {
              reload: true
          }
      },
      css: {
          files: 'source/styles/*.scss',
          tasks: ['sass'],
          options: {
            livereload: true,
          },
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    sass: {
      dist: {
        options: {
            style: 'compressed'
        },
        files: [{
            expand: true,
            cwd: 'source/styles',
            src: ['main.scss'], //['**/*.scss'],
            dest: 'source/css',
            ext: '.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-express-server');

  // Default task(s).
  grunt.registerTask('default', ['sass']);
  grunt.registerTask('server', ['express:dev', 'watch'])
};
