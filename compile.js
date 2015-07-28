var cc = require('closure-compiler');
var fs = require('fs');
var fileName = 'dist/dcDaD.min.js';

var options =
  {
    compilation_level: 'SIMPLE_OPTIMIZATIONS'
  };

function aftercompile (err, stdout, stderr) {
  if (err) throw err;
  var mycompiledcode = stdout;
  fs.writeFile(fileName, mycompiledcode, function(err){
    if(err){
      return console.log(err);
    }
    console.log('File compiled and saved as: ' + fileName);
  });
}

cc.compile(fs.readFileSync('src/dcDragAndDrop.js'), options, aftercompile);
