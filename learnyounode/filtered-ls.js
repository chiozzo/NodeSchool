const fs = require('fs')
const path = require('path')

const directory = process.argv[2]
const extension = '.' + process.argv[3]

function printFileNames(err, fileList) {
    if (err) return console.log(err)
    fileList.forEach((fileName) => {
        if (path.extname(fileName) === extension) {
            console.log(fileName)
        }
    })
}

fs.readdir(directory, printFileNames)