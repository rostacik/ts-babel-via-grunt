/// <binding BeforeBuild='ts-babel-clean' />
module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        ts: {
            default: {
                files: {
                    'TSTemp': ['TS/**/*.ts', '!TS/.baseDir.ts']
                },
                options: {
                    target: "es6",
                    additionalFlags: '--experimentalAsyncFunctions',
                    fast: 'never'
                }
            }
        },
        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: "TSTemp",
                    src: "**/*.js",
                    dest: "TS",
                    ext: ".js"
                }]
            }
        },
        clean: {
            tsTemp: ["TSTemp"],
            tsFile: ["TS/.baseDir.ts"]
        },
    });

    //load tasks
    grunt.loadNpmTasks("grunt-ts", 'grunt-babel', 'grunt-contrib-clean');

    //register and bind
    grunt.registerTask("ts-babel-clean", ["ts:default", "babel", "clean:tsTemp", "clean:tsFile"]);
};