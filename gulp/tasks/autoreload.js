import browserSync from "browser-sync";

import { config } from "../config/config.js";

export const autoreload = () => {
  browserSync.init({
    server: {
      baseDir: config.OUTPUT_DIR,
    },
  });
};
