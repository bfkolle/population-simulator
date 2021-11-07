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
    let country = countries.find(c => c.name.toLowerCase() === name.toLowerCase())
    let returnValue

    country === undefined ? returnValue = "Error, supplied country name is not valid" : returnValue = country
    return returnValue
}

function tick() {
    return "Tick tock"
}