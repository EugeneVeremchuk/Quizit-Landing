import _sass from 'sass'
import __sass from 'gulp-sass'

const $sass = __sass(_sass)

import minimizer from 'gulp-clean-css' // Сжатие CSS файла
import autoprefixer from 'gulp-autoprefixer' // Добавление вендорных префиксов
import queries from 'gulp-group-css-media-queries' // Групировка медиа запросов
import rename from 'gulp-rename'

export const sass = () => {
  return config.gulp.src(config.path.source.sass, { sourcemaps: true })
    .pipe(config.plugins.plumber(
      config.plugins.notify.onError({
        title: "SASS",
        message: "Error: <%= error.message %>"
      }))
    )
    .pipe(config.plugins.replace(/@img\//g, '../img/'))
    .pipe($sass({
      outputStyle: 'expanded'
    }))
    .pipe(queries())
    .pipe(autoprefixer({
      grid: true,
      overrideBrowserslist: ["last 3 versions"],
      cascade: true
    }))
    .pipe(config.gulp.dest(config.path.build.css))
    .pipe(minimizer())
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(config.gulp.dest(config.path.build.css))
    .pipe(config.plugins.browsersync.stream())
}