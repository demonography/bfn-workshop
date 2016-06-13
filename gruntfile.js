module.exports = function(grunt) {
		grunt.initConfig({
				pkg: grunt.file.readJSON('package.json'),
				sass: {
						dist: {
								options: {
										style: 'compressed'
								},
								files: {
										'css/main.css': 'css/main.scss'
								}
						}
				},
				postcss: {
						options: {
								processors: require('autoprefixer')({browsers: 'last 2 versions'})
						},
						dist: {
								src: 'css/*.css'
						}
				},
				watch: {
						sass: {
								files: ['css/**/*.scss'],
								tasks: ['sass', 'postcss']
						}
				}
		});
		grunt.loadNpmTasks('grunt-contrib-sass');
		grunt.loadNpmTasks('grunt-postcss');
		grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.registerTask('default', ['watch']);
}
