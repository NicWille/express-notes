const express = require('express')
const app = express()

const PORT = process.env.PORT || 3003


app.get('/notes', (req, res) => {
    console.log("these are notes file")
})

app.get('*', (req, res) => {
    console.log("this is index file")
})

app.listen(PORT, () => {
    console.log(`API server running on port: ${PORT}`)
})