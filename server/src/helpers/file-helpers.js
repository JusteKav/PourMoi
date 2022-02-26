// const path = require('path');
const fs = require('fs');

const deleteFile = (filePath) => {
  fs.unlink(filePath, function (err) {
    if (err) {
      console.log("File doesn't exist, won't remove it.");
    } else {
      console.log(`removed`);
    }
  });
};
module.exports = {
  deleteFile,
};
