"use strict";

const gulp = require("gulp"),
    concat = require("gulp-concat"),
    pump = require("pump"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename"),
    sass = require("gulp-sass"),
    sourceMaps = require("gulp-sourcemaps");

gulp.task("concatScripts", function () {
    //order matters!
    //gulp.src = readable stream of data (a node thing)
    return pump([
        gulp.src(["js/jquery.js",
            "js/sticky/jquery.sticky.js",
            "js/main.js"]),
        sourceMaps.init(),
        concat("app.js"),
        sourceMaps.write("./"),
        gulp.dest("js")
    ]);
});

gulp.task("minifyScripts", ["concatScripts"], function () {
    return pump([
        gulp.src('js/app.js'),
        sourceMaps.init({loadMaps: true}),
        uglify(),
        rename("app.min.js"),
        sourceMaps.write("./"),
        gulp.dest('js')
    ]);
});

gulp.task("compileSass", function () {
   return pump([
       gulp.src("scss/application.scss"),//no need for multiple files since application.scss imports all other scss files
       sourceMaps.init(),
       sass(),
       sourceMaps.write('./'),//relative to gulp.dest
       gulp.dest("css/")
    ]);
});

// second param is the dependencies (things to run before running task)
gulp.task("default", ["hello", "secondTask"], function () {
    console.log("I am dependent on the hello task!");
});
