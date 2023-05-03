import gulp from "gulp";
import browserSync from "browser-sync";
import webpackStream from "webpack-stream";

import { config } from "../config/config.js";

export const js = () => {
  return gulp
    .src(config.JS_DIR)
    .pipe(
      webpackStream({
        mode: config.IS_PRODUCTION ? "production" : "development",
      })
    )
    .pipe(gulp.dest(config.JS_OUTPUT_DIR))
    .pipe(browserSync.reload({ stream: true }));
};
