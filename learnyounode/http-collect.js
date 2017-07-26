const http = require('http')
const streamCapture = require('bl')

const url = process.argv[2]

http.get(url, (response) => {
    response.setEncoding('utf8')
    response.on('error', console.error)
    response.pipe(streamCapture((err, bufferData) => {
        let data = bufferData.toString()
        let dataLength = data.length
        console.log(dataLength)
        console.log(data)
    }))
})