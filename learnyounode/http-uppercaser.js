const http = require('http')
const map = require('through2-map')

const port = process.argv[2]

const server = http.createServer((request, response) => {
    if (request.method !== 'POST') {
        return response.end("I only accept POST requests\n")
    }
    
    response.writeHead(200, {
        'content-type': 'text/plain'
    })

    request.pipe(map((chunk) => {
        return chunk.toString().toUpperCase()
    })).pipe(response)
})

server.listen(port)