var fs = require('fs');

function callback(err, data) {
  if (!err) {
    var dataArray = data.split('\n');
    console.log(dataArray.length - 1);
  }
}

fs.readFile(process.argv[2], 'utf8', callback);
