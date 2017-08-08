const net = require('net')

const port = process.argv[2]

const server = net.createServer((socket) => {
    // "YYYY-MM-DD hh:mm"
    const now = new Date();
    const year = now.getFullYear();
    const month = `0${now.getMonth() + 1}`.slice(-2)
    const date = `0${now.getDate()}`.slice(-2)
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const nowString = `${year}-${month}-${date} ${hours}:${minutes}\n`
    socket.write(nowString)
    socket.end()
})

server.listen(port);