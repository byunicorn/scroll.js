module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), // add data from package.json
        banner: '/*! <%= pkg.name || pkg.title %> -v <%= pkg.version %>\n' + 
        '* <%= grunt.template.today("yy-mm-dd") %> */\n',

        jshint: {
            // all: ['*.js']
            files: ['Gruntfile.js', 'src/*.js']
        },

        uglify: {
            options: {
                banner: '<%= banner %>' //little message put on the top of js file
            },
            dist: {
                src: '<%= pkg.name %>.js',
                dest: '<%= pkg.name %>.<%= pkg.version %>.min.js'
            }
        },
        
        cssmin: {
            compress: {
                options: {
                    banner: '<%= banner %>'
                },
                files: {
                    '<%= pkg.name %>.min.css': ['1.css', '2.css']
                }
            }
        }
    });

    grunt.loadNpmTasks['grunt-contrib-uglify'];
    grunt.loadNpmTasks['grunt-contrib-jshint'];
    grunt.loadNpmTasks['grunt-contrib-cssmin'];
    grunt.registerTask('default', ['jshint', 'uglify']);
};