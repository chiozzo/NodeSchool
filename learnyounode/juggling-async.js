const http = require('http')
const streamCapture = require('bl')

const urls = [process.argv[2], process.argv[3], process.argv[4]]

const getData = (url) => {
    http.get(url, (response) => {
        response.setEncoding('utf8')
        response.on('error', console.error)
        response.pipe(streamCapture((err, bufferData) => {
            console.log(bufferData.toString())
        }))
    })
}

urls.forEach(getData)