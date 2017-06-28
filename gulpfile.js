"use strict";

const gulp = require("gulp"),
    concat = require("gulp-concat"),
    pump = require("pump"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename");

gulp.task("concatScripts", function () {
    //order matters!
    //gulp.src = readable stream of data (a node thing)
    pump([
        gulp.src(["js/jquery.js",
            "js/sticky/jquery.sticky.js",
            "js/main.js"]),
        concat("app.js"),
        gulp.dest("js")
    ]);
});

gulp.task("minifyScripts", ["concatScripts"], function () {
    pump([
        gulp.src('js/app.js'),
        uglify(),
        rename("app.min.js"),
        gulp.dest('js')
    ]);
});

// second param is the dependencies (things to run before running task)
gulp.task("default", ["hello", "secondTask"], function () {
    console.log("I am dependent on the hello task!");
});

