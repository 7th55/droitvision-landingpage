import gulp from 'gulp';

import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
};

import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { server } from './gulp/tasks/server.js';
//
import { html } from './gulp/tasks/html.js';
import { scss } from './gulp/tasks/scss.js';
import { ttfFonts } from './gulp/tasks/fonts.js';
//
import { images, svg } from './gulp/tasks/images.js';

function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.images, images);
}

const fonts = gulp.series(ttfFonts);

const mainTasks = gulp.series(
  fonts,
  gulp.parallel(copy, html, scss, images, svg)
);

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

gulp.task('default', dev);
