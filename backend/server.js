const express = require('express')

const app = express()
const port = process.env.PORT || 4000

app.use(express.static('../frontend'))

app.get('/about', (req,res) => {
    res.sendFile(require('../frontend/index.html'))
})

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`)
})
