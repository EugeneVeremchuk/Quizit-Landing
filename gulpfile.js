import gulp from 'gulp'
import path from './gulp/config/path.js'
import server from './gulp/config/server.js'
import plugins from './gulp/config/plugins.js'

global.config = {
  path, gulp, plugins
}

import { copy } from './gulp/tasks/copy.js'
import { clean } from './gulp/tasks/clean.js'
import { html } from './gulp/tasks/html.js'
import { sass } from './gulp/tasks/sass.js'
import { js } from './gulp/tasks/javascript.js'
import { img } from './gulp/tasks/images.js'
import { otf_ttf, ttf_woff, fonts } from './gulp/tasks/fonts.js'

function watcher() {
  gulp.watch(path.watch.files, copy)
  gulp.watch(path.watch.html, html)
  gulp.watch(path.watch.sass, sass)
  gulp.watch(path.watch.js, js)
}

const observer = gulp.parallel(watcher, server)
const fonts = gulp.series(otf_ttf, ttf_woff, fonts)
const tasks = gulp.series(fonts, gulp.parallel(copy, html, sass, js, img))

const dev = gulp.series(clean, tasks, observer)

gulp.task('default', dev)


