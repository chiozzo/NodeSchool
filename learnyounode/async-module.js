const filteredListModule = require('./filtered-ls-module')

const directory = process.argv[2]
const extension = process.argv[3]

filteredListModule(directory, extension, (err, data) => {
    if (err) {
        console.log(err)
    }

    data.forEach((fileName) => {
        console.log(fileName)
    })
})