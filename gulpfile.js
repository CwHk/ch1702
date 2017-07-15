var gulp = require('gulp');                    //依赖gulp
var sass = require('gulp-sass');               //编译sass文件to css文件
var connect = require('gulp-connect');         //开启服务自动刷新
var concat = require('gulp-concat');           //合并文件
var rename = require('gulp-rename');           //重命名插件

gulp.task('copy-index',function(){             //控制台输入gulp copy-index 
    return gulp.src('index.html')
           .pipe(gulp.dest('dist'))
           .pipe(connect.reload());            //热加载
});

gulp.task('images',function(){   
    return gulp.src('src/image/**/*')         //images目录下所有的文件(包括多级子目录下的文件)
           .pipe(gulp.dest('dist/image'))
           .pipe(connect.reload());            //热加载
});

gulp.task('data',function(){   
    return gulp.src(['src/xml/*.xml','src/json/*.json','!src/json/test-*.json'])   //复制多个文件，前面加！号就是不包含
           .pipe(gulp.dest('dist/data'))
           .pipe(connect.reload());            //热加载;
});

gulp.task('copy-css',function(){                   
    return gulp.src('src/css/**/*.css')
           .pipe(gulp.dest('dist/css'))
           .pipe(connect.reload());            //热加载;
});

gulp.task('sass',function(){                   
    return gulp.src('src/css/**/*.scss')
           .pipe(sass())                       //用gulp-sass插件编译scss到css
           .pipe(gulp.dest('dist/css'))
           .pipe(connect.reload());            //热加载;
});

gulp.task('copy-js',function(){                
    return gulp.src(['src/js/*.js','!src/js/jquery-1.11.3.js','!src/js/swiper-3.3.1.min.js'])
           .pipe(gulp.dest('dist/js'))
           .pipe(connect.reload());            //热加载
});

gulp.task('scripts',function(){       
    return gulp.src(['src/js/jquery-1.11.3.js','src/js/swiper-3.3.1.min.js'])
           .pipe(concat('vendor.js'))          //用gulp-concat合并文件
           .pipe(gulp.dest('dist/js'))         //合并文件并给合并后的文件取名
});

gulp.task('build',['copy-index','images','sass','copy-css','copy-js','scripts'],function(){     //build任务依赖其他几个任务，同时执行他依赖的几个任务，等几个都完成后再执行自己的回调函数（输出编译成功）
    console.log('编译成功！');
});

gulp.task('server',function(){   
    connect.server({
      root: 'dist',
      livereload: true,
      // port:8000,           //默认是8080
    })
});

gulp.task('watch',function(){                  //监视任务
    gulp.watch('index.html',['copy-index']);   //当index.html变化时执行copy-index任务
    gulp.watch('src/images/**/*',['images']);
    // gulp.watch(['src/xml/*.xml','src/json/*.json','!src/json/test-*.json'],['data']);
    gulp.watch('src/css/**/*.scss',['sass']);
    gulp.watch('src/css/**/*.css',['copy-css']);
    gulp.watch(['src/js/*.js','!src/js/jquery-1.11.3.js','!src/js/swiper-3.3.1.min.js'],['copy-js']);
    gulp.watch(['src/js/jquery-1.11.3.js','src/js/swiper-3.3.1.min.js'],['sass'],['scripts']);
});

gulp.task('default',['server','watch']);      //默认任务,控制台只需要输入gulp










//gulp.src('images/*.{png,jpg}')    //images目录下所有的png/jpg文件(不包括多级子目录下的文件)
//gulp.src('images/*.jpg')   //images目录下所有jpg的文件(不包括子目录下的文件)
//gulp.src('images/*')       //images目录下所有的文件(不包括子目录下的文件)