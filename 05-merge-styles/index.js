const fs= require('fs');
const path = require('path');
const pathFolder=path.join(__dirname, 'styles');
let text='';
let newPath=path.join(__dirname, 'project-dist', 'bundle.css');

fs.readdir(path.join(__dirname, 'project-dist'), {withFileTypes:true}, (err, files) => {
  if (err) throw err;
  files.forEach((item) =>{
    if (item.name==='bundle.css') {
      fs.unlink(newPath, (err) =>{if (err) throw err;})
    }
  });
});



fs.readdir(pathFolder, {withFileTypes:true}, (err, files) => {
  if (err) throw err;

  for (let file of files) {
    const pathFile=path.join(pathFolder, file.name);
    const extensation=path.extname(pathFile);
    if (file.isFile && extensation==='.css') {
      fs.readFile(pathFile, (err,data) => {
        if (err) throw err;
        text+=data.toString();
        fs.writeFile(newPath, text, (err)=> {
          if (err) throw err;
        });
      });

    }
    
  }
 
}
);

