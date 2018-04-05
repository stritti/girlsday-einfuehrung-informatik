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
					{ cwd: "src", src: "*.html", dest: "output/", expand: true }
				]
			},
			css: {
				files: [
					{ cwd: "src/css", src: "*.css", dest: "output/css", expand: true }
				]
			},
			js: {
				files: [{ cwd: "src/js", src: "*.js", dest: "output/js", expand: true }]
			},
			images: {
				files: [
					{ cwd: "src/img", src: "**", dest: "output/img/", expand: true }
				]
			},
			libs: {
				files: [
					{
						expand: true,
						cwd: "node_modules/jquery/dist",
						src: "jquery.min.js",
						dest: "output/js"
					},
					{
						expand: true,
						cwd: "node_modules/lazyload",
						src: "lazyload.min.js",
						dest: "output/js"
					} /*,
          {
            expand: true,
            cwd: 'node_modules/impress.js/js',
            src: 'impress.js',
            dest: 'output/js'
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
					"./output/js/presentation.min.js": [
						"./output/js/presentation.js",
						"./output/js/presentation.makecode-blocks.js",
						"./output/js/presentation.svg.js"
					]
					/*'./output/js/impress.min.js': [
            './output/js/impress.js' ]*/
				}
			}
		},
		watch: {
			grunt: {
				files: ["Gruntfile.js"]
			},
			livereload: {
				files: [
					"src/css/**/*.css",
					"src/svg/**/*.svg",
					"src/**/*.html",
					"src/img/**/*.{png,jpg,jpeg,gif}",
					"src/js/**/*.{js,json}"
				],
				tasks: ["copy", "uglify"],
				options: {
					interrupt: true,
					livereload: true
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
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-browser-sync");

	grunt.registerTask("default", [
		"copy",
		"uglify",
		"browserSync",
		"watch"
	]);
	grunt.registerTask("build", ["copy", "uglify"]);
};
