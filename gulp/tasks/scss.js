import gulp from "gulp";
import browserSync from "browser-sync";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import gulpIf from "gulp-if";
import GulpCleanCss from "gulp-clean-css";
import rename from "gulp-rename";

const sass = gulpSass(dartSass);

import { config } from "../config/config.js";

export const scss = () => {
  return gulp
    .src(config.SCSS_DIR)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulpIf(config.IS_PRODUCTION, GulpCleanCss({ level: 2 })))
    .pipe(gulpIf(config.IS_PRODUCTION, rename({ suffix: ".min" })))
    .pipe(gulp.dest(config.SCSS_OUTPUT_DIR))
    .pipe(browserSync.reload({ stream: true }));
};
