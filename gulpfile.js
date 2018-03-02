var gulp = require('gulp');
var svgmin = require('gulp-svgmin');

gulp.task('default', function () {
  return gulp.src('input/**/*.svg')
      .pipe(svgmin({
        plugins: [{
          cleanupAttrs: true
        }, {
          removeDoctype: true
        },{
          removeXMLProcInst: true
        },{
          removeComments: true
        },{
          removeMetadata: true
        },{
          removeTitle: true//
        },{
          removeDesc: true
        },{
          removeUselessDefs: true
        },{
          removeEditorsNSData: true
        },{
          removeEmptyAttrs: true
        },{
          removeHiddenElems: true
        },{
          removeEmptyText: true
        },{
          removeEmptyContainers: true
        },{
          removeViewBox: false//
        },{
          cleanUpEnableBackground: true
        },{
          convertStyleToAttrs: true
        },{
          convertColors: true
        },{
          convertPathData: true
        },{
          convertTransform: true
        },{
          removeUnknownsAndDefaults: true
        },{
          removeNonInheritableGroupAttrs: true
        },{
          removeUselessStrokeAndFill: true
        },{
          removeUnusedNS: true
        },{
          cleanupIDs: {
            force: true
          },
        },{
          addAttributesToSVGElement: false/*{
            attribute: 'class="avatar_svg"'
          }*/,
        },{
          cleanupNumericValues: true
        },{
          moveElemsAttrsToGroup: true
        },{
          moveGroupAttrsToElems: true
        },{
          collapseGroups: true
        },{
          removeRasterImages: false//
        },{
          mergePaths: true
        },{
          convertShapeToPath: true
        },{
          sortAttrs: true//
        },{
          transformsWithOnePath: true//
        },{
          removeDimensions: true//
        },{
          removeAttrs: true//
        },]
      }))
      .pipe(gulp.dest('./output'));
});