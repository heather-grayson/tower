module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		qunit: {
			files: ['tests/*.html'],
		},
		jsonlint: {
			scripts: {
				src: [ 'sjs/**/*.json', 'data/**/*.json' ]
			}
		},
		jshint: {
			files: ['Gruntfile.js', 'sjs/core/**/*.js', 'tests/*.js'],
			options: {
				// options here to override JSHint defaults
				globals: {
					jQuery: true,
					console: true,
					module: true,
					document: true,
					strict: true,
					smarttabs: true,
					trailing: true
				}
			}
		},
		watch: {
			scripts: {
				files: ['<%= jshint.files %>'],
				tasks: ['snockets'],
				options: {
					debounceDelay: 250,
					livereload: true,
					spawn: false
				}
			},
			css: {
				files: ['scss/**/*.scss', 'scss/**/*.sass', 'scss/**/*.css'],
				tasks: ['compass:dev'],
				options: {
					debounceDelay: 250,
					livereload: true,
					spawn: false
				}
			}
		},
		meta: {
			buildDirectory: 'js',
			header: '',
			footer: '',
		},
		snockets: {
			core: {
				src: ['sjs/core/main.js', 'sjs/core/head.js', 'sjs/core/libs.js'],
				options: {
					concat: {
						header: '<%= meta.header %>',
						destExtension: "js",
						destDir: "<%= meta.buildDirectory %>",
						footer: '<%= meta.footer %>'
					},
					min: {
						destExtension: "js",
						destDir: "<%= meta.buildDirectory %>"
					}
				}
			}
		},
		compass: {
			dist: {
				options: {
					sassDir: 'scss',
					cssDir: 'css',
					environment: 'production'
				}
			},
			dev: {
				options: {
					sassDir: 'scss',
					cssDir: 'css'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-barkeep');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-jsonlint');
	grunt.loadNpmTasks('grunt-beep');

	// Default task(s).
	grunt.registerTask('test', [  'qunit', 'beep:error' ]);
	grunt.registerTask('default', [ 'qunit', 'compass:dist', 'snockets', 'beep:error']);
	grunt.registerTask('travis', [ 'qunit']);

};
