const countryService = require("./countries")
let countries = countryService.getCountries()

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

    if (!response.error)
        response.payload = "Update successful"
        
    return response
}

function tick() {
   countries.forEach(c => {
       c.population += c.population * c.populationGrowthRate
       c.economy.gdp += c.economy.gdp * c.economy.gdpGrowthRate
   })
   return new Response("Tick successful");
}

function Response(payload, error = undefined) {
    this.error = error
    this.payload = payload
}