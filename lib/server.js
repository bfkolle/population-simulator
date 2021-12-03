const server = require('express')()
const port = 8080

module.exports = {
    expressServer : server,
    startServer: function() {
        server.listen(port, () => {
            console.log(`App running on port ${port}`)
        })
    }
}