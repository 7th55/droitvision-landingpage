import webp from 'gulp-webp';

export const images = () => {
  return app.gulp
    .src(app.path.src.images)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'IMAGES',
          message: 'Error <% error.message %>',
        })
      )
    )
    .pipe(webp())
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browsersync.stream());
};

export const svg = () => {
  return app.gulp
    .src(app.path.src.svg)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'SVG',
          message: 'Error <% error.message %>',
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.svg))
    .pipe(app.plugins.browsersync.stream());
};
