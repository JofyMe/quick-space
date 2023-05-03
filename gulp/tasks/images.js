import gulp from "gulp";
import browserSync from "browser-sync";

import { config } from "../config/config.js";

export const images = () => {
  return gulp
    .src(config.IMAGES_DIR)
    .pipe(gulp.dest(config.IMAGES_OUTPUT_DIR))
    .pipe(browserSync.reload({ stream: true }));
};
