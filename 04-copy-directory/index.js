const fs = require('fs');
const path = require('path');
const newPath=path.join(__dirname, 'files-copy');
const oldPath=path.join(__dirname, 'files');
fs.mkdir(newPath, {recursive: true}, (err) => {
  if(err) throw err;
});
fs.readdir(newPath, {withFileTypes: true}, (err,filesN) => {
  if (err) throw err;
  for (let fileN of filesN) {
    fs.unlink(path.join(newPath, fileN.name), (err) => {
      if (err) throw err;
    });
  }
});
fs.readdir(oldPath, {withFileTypes: true}, (err, files) => {
  if (err) throw err;
  for (let file of files) {
    fs.copyFile(path.join(oldPath, file.name), path.join(newPath, file.name), err => {
      if(err) throw err;
      console.log(file.name);
    });
  }
});


