const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

function getFiles(sourcepath) {
  const isFile = fileName => {
    let fullpath = path.join(sourcepath, fileName);
    return fs.lstatSync(fullpath).isFile();
  };

  let ffs = fs.readdirSync(sourcepath).filter(isFile);

  return ffs;
}

function resize(sourcePath, destinationPath) {
  sharp(sourcePath)
    .resize({ width: 500 })
    .toFile(destinationPath)
    .then(function(newFileInfo) {
      console.log(`Success ${path.basename(sourcePath)}`);
    })
    .catch(function(err) {
      console.log(`Error occured: ${err}, file: ${path.basename(sourcePath)}`);
    });
}

module.exports.getFiles = getFiles;
module.exports.resize = resize;
