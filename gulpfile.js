"use strict";

const gulp = require("gulp");

gulp.task("hello", function () {
    console.log("Hello, World");
});

gulp.task("secondTask", function () {
    console.log("I should be run second!");
});

// second param is the dependencies (things to run before running task)
gulp.task("default", ["hello", "secondTask"], function () {
    console.log("I am dependent on the hello task!");
});

