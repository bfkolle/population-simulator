module.exports = startApplication
const port = 3000

function startApplication() {
    const express = require('express')();
    
    express.all('/', (req, res) => {
        res.send('Main page')
    })
    
    express.get('/all', (req, res) => {
        res.send('All endpoint')
    })

    express.get('/country', (req, res) => {
        res.send('Country endpoint')
    })

    express.get('/tick', (req, res) => {
        res.send('Tick endpoint')
    })
    
    express.listen(port, () => {
        console.log(`App running on port ${port}`)
    })
}
