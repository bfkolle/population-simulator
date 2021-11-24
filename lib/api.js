const server = require('express')();

const port = 8080

module.exports = {
    startApi: function(service) {        
        server.get('/all', (req, res) => {
            res.send(service.getAllCountries())
        })
    
        server.get('/country', (req, res) => {
            let country = req.query["name"]
            res.send(service.getCountry(country))
        })

        server.get('/updategrowth', (req, res) => {
            let country = req.query["name"]
            let populationGrowthRate = req.query["growth"]
            res.send(service.updatePopulationGrowth(country, populationGrowthRate))
        })
    
        server.get('/tick', (req, res) => {
            res.send(service.tick())
        })
        
        server.listen(port, () => {
            console.log(`App running on port ${port}`)
        })
    }
}