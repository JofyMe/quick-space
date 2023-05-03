import gulp from "gulp";

import { html } from "./gulp/tasks/html.js";
import { scss } from "./gulp/tasks/scss.js";
import { watcher } from "./gulp/tasks/watcher.js";
import { clean } from "./gulp/tasks/clean.js";
import { images } from "./gulp/tasks/images.js";
import { js } from "./gulp/tasks/js.js";

gulp.task("default", gulp.series(clean, html, scss, js, images, watcher));
