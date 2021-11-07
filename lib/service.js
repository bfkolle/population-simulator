const countries = require("./countries")

module.exports = {
    getAllCountries: getAllCountries,
    getCountry: getCountry,
    tick: tick
}

function getAllCountries() {
    return countries
}

function getCountry(name) {
    let returnValue = "Error, country name not supplied. Format: 'host/country?name=countryName'"
    if (name === undefined)
        return returnValue

    let country = countries.find(c => c.name.toLowerCase() === name.toLowerCase())

    country === undefined ? returnValue = "Error, supplied country name is not valid" : returnValue = country
    return returnValue;
}

function tick() {
   countries.forEach(c => c.population += c.population * c.populationGrowthRate)
   return "Tick successful";
}