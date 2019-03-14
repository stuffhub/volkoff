const gulp = require('gulp'),
    miniCss = require('gulp-clean-css'),
    sass = require('gulp-sass'),
    concatCss = require('gulp-concat-css');
    webpack = require('webpack-stream'),
    browserSync = require('browser-sync'),
    rename = require('gulp-rename');


gulp.task('miniCss', function(){
    return gulp.src('build/styles/bundle.css')
    .pipe(miniCss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build/styles'))
    .pipe(browserSync.stream());
});

gulp.task('sass', function(){
    return gulp.src('src/styles/sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('src/styles'));
});

gulp.task('css', function() {
    return gulp.src(['src/styles/reset.css','src/styles/*.css'])
    .pipe(concatCss('bundle.css'))
    .pipe(gulp.dest('build/styles'));
});

gulp.task('webpack', function(){
    return gulp.src('src/js/main.js')
    .pipe(webpack({
        output: {
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        },
        mode: 'development',
        devtool: false
    }))
    .pipe(gulp.dest('build/js'))
    .pipe(browserSync.stream());
});

gulp.task('default', function(){
    browserSync({
        server: {
            baseDir: './'
        },
        index: 'src/index.html',
        notify: false
    });
    gulp.watch('src/js/*.js', gulp.series('webpack'));
    gulp.watch('src/styles/sass/*.sass', gulp.series('sass', 'css', 'miniCss'));
    gulp.watch('src/*.html').on('change', browserSync.reload);
});