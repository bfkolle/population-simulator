const service = require('./service')
const api = require('./api')

module.exports = { startApplication: startApplication }

function startApplication() {
    api.startApi(service)
}
