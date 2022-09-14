const express = require('express')
const app = express()
const port = 8080

app.get('/', (reg, res) => res.send('Hello World'))

app.listen(port)
console.log(`App is running on http://localhost:${port}`)

