const fs = require('fs')
const path = require('path')

module.exports = (directoryName, fileExtension, callback) => {
    fs.readdir(directoryName, (err, data) => {
        if (err) {
            return callback(err)
        }

        let listArray = []
        data.forEach((fileName) => {
            if (path.extname(fileName) === '.' + fileExtension) {
                listArray.push(fileName);
            }
        })
        return callback(null, listArray)
    })
}