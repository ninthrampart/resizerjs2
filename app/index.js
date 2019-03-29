const path = require('path');
const resizer = require('./resizer');

let files = resizer.getFiles('D:\\Tmp\\Imgs');

console.log(`Got ${files.length} files`);
let sourcePath = 'D:\\Tmp\\Imgs';
let destPath = 'D:\\Tmp\\Imgs\\resized';

for (var i in files) {
  let f = files[i];
  console.log(`Resizing: ${path.basename(f)}`);
  resizer.resize(
    path.join(sourcePath, f),
    path.join(destPath, path.basename(f))
  );
  console.log(`Resized: ${path.basename(f)}`);
}
console.log('Done resizing');
