const service = require('./service')

module.exports = { startApplication: startApplication }
const port = 3000

function startApplication() {
    const server = require('express')();
    
    server.all('/', (req, res) => {
        res.send('Main page')
    })
    
    server.get('/all', (req, res) => {
        res.send('All endpoint')
    })

    server.get('/country', (req, res) => {
        res.send('Country endpoint')
    })

    server.get('/tick', (req, res) => {
        res.send(service.tick())
    })
    
    server.listen(port, () => {
        console.log(`App running on port ${port}`)
    })
}
