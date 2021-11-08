const path = require('path');
const fs = require('fs');
const pathFile = path.join(path.dirname(__dirname), '01-read-file', 'text.txt');

const stream = new fs.ReadStream(pathFile, {encoding: 'utf-8'});

stream.on('readable', function(){
  const data=stream.read();
  console.log(data);
});

/*stream.on('end', function(){
  console.log('The END');
});
*/
