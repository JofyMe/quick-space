import gulp from "gulp";
import browserSync from "browser-sync";
import htmlmin from "gulp-htmlmin";
import gulpIf from "gulp-if";
import fileinclude from "gulp-file-include";

import { config } from "../config/config.js";

export const html = () => {
  return gulp
    .src(config.HTML_DIR)
    .pipe(fileinclude({ prefix: "@@", basepath: "@file" }))
    .pipe(gulpIf(config.IS_PRODUCTION, htmlmin({ collapseWhitespace: true })))
    .pipe(gulp.dest(config.OUTPUT_DIR))
    .pipe(browserSync.reload({ stream: true }));
};
