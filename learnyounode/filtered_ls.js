// MY FIRST ANSWER
var fs = require('fs');
var path = require('path');

function callback(err, list) {
  if (!err) {
    for (item of list) {
      if (path.extname(item) == '.' + process.argv[3]) {
        console.log(item);
      }
    }
  }
}
fs.readdir(process.argv[2], callback);



// MY REFACTORED ANSWER
var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = '.' + process.argv[3];

function callback(err, fileList) {
if (err) return console.log(err);
  fileList.forEach(function(item) {
    if (path.extname(item) == ext) {
      console.log(item);
    }
  })
}
fs.readdir(dir, callback);



// OFFICIAL ANSWER
var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
 if (err) return console.error(err)
 files.forEach(function(file) {
     if (path.extname(file) === ext) {
         console.log(file)
     }
 })
})
