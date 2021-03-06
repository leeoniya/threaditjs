module.exports = function(grunt) {
	require("load-grunt-tasks")(grunt);

	var config = {
		copy : {
			img : {
				files : [{
					src : "**",
					dest : "site/",
					expand : true,
					cwd : "img"
				}]
			}
		},
		less : {
			run : {
				src : "less/**/*",
				dest : "build/styles.css"
			}
		},
		markdown : {
			index : {
				options : {
					template : "layout.html",
					gfm: false
				},
				files : [{
					src : ["content.md"],
					dest : "site/index.html"
				}],
			}
		},
		watch : {
			rebuild : {
				files : ["layout.html", "content.md", "img/**/*", "less/**.*"],
				tasks : ["default"]
			}
		},
		jshint : {
			nag : {
				files : [{
					src : ["examples/**/*.js",
					"!examples/**/lib/*.js",
					"lib/**/*.js",
					"index.js",
					"Gruntfile.js"]
				}],
				options : {
					jshintrc : true
				}
			}

		}
	};

	grunt.registerTask("default", [
		"less:run", "copy:img", "markdown:index"
	]);

	grunt.initConfig(config);
};