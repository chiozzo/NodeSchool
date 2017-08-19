const http = require('http')
const url = require('url')

const port = process.argv[2]

function parseTime(time) {
    return {
        "hour": time.getHours(),
        "minute": time.getMinutes(),
        "second": time.getSeconds()
    }
}

function parseUnixTime(time) {
    return {
        "unixtime": time.getTime()
    }
}

const server = http.createServer((request, response) => {
    if (request.method !== 'GET') {
        return response.end("I only accept GET requests\n")
    }

    const urlProperties = url.parse(request.url, true)
    const urlPath = urlProperties.pathname
    const isoFormat = urlProperties.query.iso
    const time = new Date(isoFormat)
    let json = null

    switch (urlPath) {
        case '/api/parsetime':
            const parsedTime = parseTime(time)
            json = JSON.stringify(parsedTime)
            break;
        case '/api/unixtime':
            const unixTime = parseUnixTime(time)
            json = JSON.stringify(unixTime)
            break;
        default:
            break;
    }

    if (json) {
        response.writeHead(200, {
            'content-type': 'application/json'
        })
        response.write(json)
    } else {
        response.writeHead(500)
    }
    response.end()
})

server.listen(port)