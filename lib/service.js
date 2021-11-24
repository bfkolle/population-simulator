const countries = require("./countries")

module.exports = {
    getAllCountries: getAllCountries,
    getCountry: getCountry,
    updatePopulationGrowth: updatePopulationGrowth,
    tick: tick
}

function getAllCountries() {
    return new Response(countries)
}

function getCountry(name) {
    let response = new Response()

    if (name !== undefined) {
        let country = countries.find(c => normalizeName(c.name) === normalizeName(name))
        country === undefined ? response.error = "Supplied country name is not valid" : response.payload = country
    }
    else
        response.error = "Country name not supplied. Format: 'host/country?name=countryName'"
        
    return response
}

function normalizeName(name) {
    return name.replace(" ","").toUpperCase()
} 

function updatePopulationGrowth(name, populationGrowthRate) {
    let response = new Response()

    if (name !== undefined) {
        let country = countries.find(c => normalizeName(c.name) === normalizeName(name))
        country === undefined ? response.error = "Supplied country name is not valid" : country.populationGrowthRate = parseFloat(populationGrowthRate)
    }
    else
        response.error = "Country name not supplied. Format: 'host/country?name=countryName'"
        
    return response.payload = "Update successful"
}

function tick() {
   countries.forEach(c => {
       c.population += c.population * c.populationGrowthRate
       c.economy.gdp += c.economy.gdp * c.economy.gdpGrowthRate
       c.populationGrowthRate -= c.populationGrowthRate / (c.gdpPerCapita() / 10000)
       c.economy.gdpGrowthRate -= c.economy.gdpGrowthRate / (c.gdpPerCapita() / 10000)
   })
   return new Response("Tick successful");
}

function Response(payload, error = undefined) {
    this.error = error
    this.payload = payload
}