module.exports = 

function startApplication() {
    const express = require('express')();
    const port = 3000
    
    express.get('/', (req, res) => {
        res.send('Hello World')
    })
    
    express.listen(port, () => {
        console.log(`App running on port ${port}`)
    })
}
