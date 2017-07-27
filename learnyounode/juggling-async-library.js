const http = require('http')
const streamCapture = require('bl')
const async = require('async')

const urls = [process.argv[2], process.argv[3], process.argv[4]]

async.map(urls, (url, callback) => {
    http.get(url, (response) => {
        response.setEncoding('utf8')
        response.on('error', console.error)
        response.pipe(streamCapture((err, bufferData) => {
            if (err) {
                callback(err)
            }
            // console.log(bufferData.toString())
            callback(null, bufferData.toString())
        }))
    })
}, (err, data) => {
    if (err) {
        console.error(`error`, err)
    }
    data.forEach(console.log)
})