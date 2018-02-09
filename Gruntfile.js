module.exports = function(grunt) {
  "use strict";

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    clean: {
      folder: ["output", "tmp"]
    },
    copy: {
      html: {
        files: [
          { cwd: "src", src: "index.html", dest: "output/", expand: true }
        ]
      },
      css: {
        files: [
          { cwd: "src/css", src: "*.css", dest: "output/css", expand: true }
        ]
      },
      impress: {
        files: [{ cwd: "src/js", src: "*.js", dest: "output/js", expand: true }]
      },
      images: {
        files: [
          { cwd: "src/img", src: "**", dest: "output/img/", expand: true }
        ]
      }
    },
    watch: {
      grunt: {
        files: ["Gruntfile.js"]
      },
      livereload: {
        files: [
          "src/*",
          "src/css/**/*.css",
          "src/**/*.html",
          "src/img/**/*.{png,jpg,jpeg,gif}",
          "src/js/**/*.{js,json}"
        ],
        tasks: ["copy"],
        options: {
          //interrupt: true,
          livereload: true
        }
      }
    },
    embed: {
      options: {
        threshold: "10240KB" /* Embedd EVERYTHING */,
        assetRoot: "output"
      },
      html: {
        files: {
          "output/index.html": "src/index.html"
        }
      }
    },      
    browserSync: {
      dev: {
        bsFiles: {
          src: ["output/css/*.css", "output/js/*.js", "output/*.html"]
        },
        options: {
          watchTask: true,
          server: "./output"
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-browser-sync");
  grunt.loadNpmTasks("grunt-embed");

  grunt.registerTask("default", [
    "copy:css",
    "copy:impress",
    "copy:images",
    "embed:html",
    "browserSync",
    "watch"
  ]);
  grunt.registerTask("build", [
    "copy:css",
    "copy:impress",
    "copy:images",
    "embed:html"
  ]);
  grunt.registerTask("no_embedd", [
    "copy:css",
    "copy:impress",
    "copy:images",
    "copy:html"
  ]);
};
