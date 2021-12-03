const service = require('./service')
const api = require('./api')
const proxy = require('./proxy')
const server = require('./server')

module.exports = { startApplication: startApplication }

function startApplication() {
    api.startApi(server.expressServer, service)
    proxy.startProxy(server.expressServer)
    server.startServer()
}
