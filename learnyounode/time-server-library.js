const net = require('net')
const strftime = require('strftime')

const port = process.argv[2]

const server = net.createServer((socket) => {
    // "YYYY-MM-DD hh:mm"
    const nowString = strftime('%Y-%m-%d %I:%M\n', new Date())
    socket.write(nowString)
    socket.end()
})

server.listen(port)