const {stdin}=process;
const {stdout}=process;
const fs=require('fs');
const path=require('path');
const pathFile=path.join(__dirname, 'text.txt');
function handle () {
  console.log('Работа завершена!');
  process.exit(1);
}
fs.writeFile(pathFile, '', (err) => {
  if (err) throw err;
}
);
stdout.write('Чтобы Вы хотели записать?');
stdin.on('data', data => {
  if (data.toString().trim()==='exit') {
    handle();
  } else {
    fs.appendFile(pathFile, data, err => {
      if (err) throw err;
      console.log('Файл изменен');
    });
  }
});
process.on('SIGINT', handle);
