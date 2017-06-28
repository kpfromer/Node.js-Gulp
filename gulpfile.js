"use strict";

const gulp = require("gulp"),
    concat = require("gulp-concat");

gulp.task("concatScripts", function () {
    //order matters!
    //gulp.src = readable stream of data (a node thing)
    gulp.src(["js/jquery.js",
        "js/sticky/jquery.sticky.js",
        "js/main.js"])
        .pipe(concat("app.js"))//concats the readable stream of data into file app.js
        .pipe(gulp.dest("js"));//sends app.js to js folder
});

// second param is the dependencies (things to run before running task)
gulp.task("default", ["hello", "secondTask"], function () {
    console.log("I am dependent on the hello task!");
});

