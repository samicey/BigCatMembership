module.exports = (grunt)=>{
  grunt.initConfig({
    jshint : {
      files : ['lib/**/*js', 'models/**/*js']
    },
    watch : {
      // files to be watched with the file path 
      // and tasks to run with it
      files : ['lib/**/*js', 'models/**/*js'],
      tasks : ['jshint'] 
    }
  });


  // Loading the node modules so grunt can loacte it.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
}