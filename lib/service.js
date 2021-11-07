const countries = require("./countries")

module.exports = {
    getAllCountries: getAllCountries,
    getCountry: getCountry,
    tick: tick
}

function getAllCountries() {
    return new Response(countries)
}

function getCountry(name) {
    let response = new Response()

    if (name !== undefined) {
        let country = countries.find(c => c.name.toLowerCase() === name.toLowerCase())
        country === undefined ? response.error = "Error, supplied country name is not valid" : response.payload = country
    }
    else
        response.error = "Error, country name not supplied. Format: 'host/country?name=countryName'"
        
    return response
}

function tick() {
   countries.forEach(c => c.population += c.population * c.populationGrowthRate)
   return new Response("Tick successful");
}

function Response(payload, error = undefined) {
    this.error = error
    this.payload = payload
}