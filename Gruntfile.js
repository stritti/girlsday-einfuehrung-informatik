module.exports = function (grunt) {
  'use strict'
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      folder: ['dist', 'tmp']
    },
    copy: {
      html: {
        files: [{ cwd: 'src', src: '*.html', dest: 'dist/', expand: true }]
      },
      css: {
        files: [{ cwd: 'src/css', src: '*.css', dest: 'dist/css', expand: true }]
      },
      js: {
        files: [{ cwd: 'src/js', src: '*.js', dest: 'dist/js', expand: true }]
      },
      images: {
        files: [{ cwd: 'src/img', src: '**', dest: 'dist/img/', expand: true }]
      },
      libs: {
        files: [
          {
            expand: true,
            cwd: 'node_modules/jquery/dist',
            src: 'jquery.min.js',
            dest: 'dist/js'
          },
          {
            expand: true,
            cwd: 'node_modules/lazyload',
            src: 'lazyload.min.js',
            dest: 'dist/js'
          } /*,          {            expand: true,
            cwd: 'node_modules/impress.js/js',
            src: 'impress.js',
            dest: 'dist/js'
         },        */
        ]
      }
    },
    uglify: {
      target: {
        options: {
          mangle: false
        },
        files: {
          './dist/js/presentation.min.js': [
            './dist/js/presentation.js',
            './dist/js/presentation.makecode-blocks.js',
            './dist/js/presentation.svg.js'
          ]
          /* './dist/js/impress.min.js': [
            './dist/js/impress.js' ] */
        }
      }
    },
    watch: {
      grunt: {
        files: ['Gruntfile.js']
      },
      livereload: {
        files: [
          'src/css/**/*.css',
          'src/svg/**/*.svg',
          'src/**/*.html',
          'src/img/**/*.{png,jpg,jpeg,gif}',
          'src/js/**/*.{js,json}'
        ],
        tasks: ['copy', 'uglify'],
        options: {
          interrupt: true,
          livereload: true
        }
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: ['dist/css/*.css', 'dist/js/*.js', 'dist/*.html']
        },
        options: {
          watchTask: true,
          server: './dist'
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-browser-sync')

  grunt.registerTask('default', ['copy', 'uglify', 'browserSync', 'watch'])
  grunt.registerTask('build', ['copy', 'uglify'])
}
