const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bountyHunterRouter = require('./routes/bounties')
const app = express()

// Middleware
app.use(express.json())
app.use(morgan('dev'))

// DB
main().catch(err => console.log(err))
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/bountiesdb')
    console.log('connected to the DB')
}

app.use('/bounties', bountyHunterRouter)

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({ errMsg: err.message })
})

app.listen(3000, () => {
    console.log(`App started on port 3000`)
})