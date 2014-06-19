//The "wrapper" function, and all of your Grunt code must be specified inside this function
module.exports = function(grunt) {

    // Project and task configuration
    grunt.initConfig({
        /* imports the JSON metadata stored in package.json into the grunt config.
         * Because <% %> template strings may reference any config properties,
         * configuration data like filepaths and file lists may be specified this way to reduce repetition.*/
        pkg : grunt.file.readJSON('package.json'),
        //Task Configuration and Targets
        uglify : {
            /* Inside a task configuration, 
             * an options property may be specified to override built-in defaults. 
             * In addition, each target may have an options property which is specific to that target. 
             * Target-level options will override task-level options.
             * The options object is optional and may be omitted if not needed.*/
            options : {
                banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build : {
                src : 'src/<%= pkg.name %>.js',
                dest : 'build/<%= pkg.name %>.min.js'
            },
            /* When a task is run, Grunt looks for its configuration under a property of the same name.
             * Multi-tasks can have multiple configurations, defined using arbitrarily named "targets."
             * here is two targets*/
            foo : {
                // This is target-level options
                options : {}
            },
            bar : {
                // No options specified; this target will use task-level options.
            }
        }
    });

    // Loading Grunt plugins and tasks
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    /* Default task(s).
     * You can configure Grunt to run one or more tasks by default by defining a default task.*/
    //grunt.registerTask('default', ['uglify']);
    grunt.registerTask('default', 'Log some stuff.', function() {
        grunt.log.write('Moo Moo Moo...').ok();
    });

};
