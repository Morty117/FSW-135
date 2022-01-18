const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const inventoryRouter = require('./routes/Inventory')
const PORT = 9000

// Middleware
app.use(express.json())
app.use(morgan('dev'))

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/inventorydb');
    console.log("Connected to the DB")
}

app.use('/inventory', inventoryRouter)

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({ errMsg: err.message })
})

app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})