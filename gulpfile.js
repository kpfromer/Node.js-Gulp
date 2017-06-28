"use strict";

const gulp = require("gulp"),
    concat = require("gulp-concat"),
    pump = require("pump"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename"),
    sass = require("gulp-sass");

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

gulp.task("compileSass", function () {
   pump([
       gulp.src("scss/application.scss"),//no need for multiple files since application.scss imports all other scss files
       sass(),
       gulp.dest("css/")
    ]);
});

// second param is the dependencies (things to run before running task)
gulp.task("default", ["hello", "secondTask"], function () {
    console.log("I am dependent on the hello task!");
});

