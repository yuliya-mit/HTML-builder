const fs= require('fs');
const path=require('path');

fs.readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true }, (err, files) => {
  if (err) throw err;
  
  for (let file of files) {
    if (file.isFile()) {
      let pathFile=path.join(__dirname, 'secret-folder', file.name);
      let extension=path.extname(pathFile);
      let name=path.basename(pathFile, extension);
      fs.stat(pathFile, function(err, stats) {
        
        console.log(`${name}-${extension.slice(1)}-${stats['size']}`);
      });
    }
  }
}); 

  