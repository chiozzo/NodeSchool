const fs = require("fs")

fs.readFile(process.argv[2], 'utf-8', (err, data) => {
    if (!err) {
        const dataArray = data.split('\n')
        console.log(dataArray.length - 1)
    }
})