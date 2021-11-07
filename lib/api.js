const server = require('express')();

const port = 3000

module.exports = {
    startApi: function(service) {
        server.all('/', (req, res) => {
            res.send('Main page')
        })
        
        server.get('/all', (req, res) => {
            res.send(service.getAllCountries())
        })
    
        server.get('/country', (req, res) => {
            let country = req.query["name"]
            res.send(service.getCountry(country))
        })
    
        server.get('/tick', (req, res) => {
            res.send(service.tick())
        })
        
        server.listen(port, () => {
            console.log(`App running on port ${port}`)
        })
    }
}