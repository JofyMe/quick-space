export const config = {
  BASE_DIR: "src", // Папка для разработки
  OUTPUT_DIR: "docs", // Папка для исходников компиляции

  /**
   * Если false, значит сборка ориентирована на разработку
   * Если true, тогда сборка ориентирована на билд проекта
   *
   * Во втором случае применяются новые функции для минификации, оптимизации и т.д
   */
  IS_PRODUCTION: false,
};

// Путь для отслеживания html
config.HTML_DIR = `${config.BASE_DIR}/**/*.html`;

// Путь для отслеживания scss
config.SCSS_DIR = `${config.BASE_DIR}/sass/**/*.scss`;
config.SCSS_OUTPUT_DIR = `${config.OUTPUT_DIR}/css`;

// Путь для отслеживания js
config.JS_DIR = `${config.BASE_DIR}/js/**/*.js`;
config.JS_OUTPUT_DIR = `${config.OUTPUT_DIR}/js`;

// Путь для отслеживания картинок
config.IMAGES_DIR = `${config.BASE_DIR}/images/**/*`;
config.IMAGES_OUTPUT_DIR = `${config.OUTPUT_DIR}/images`;
