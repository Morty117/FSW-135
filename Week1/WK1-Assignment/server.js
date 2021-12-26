const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const bountyHunterRouter = require('./routes/bounties')
const PORT = 9000

// Middleware
app.use(express.json())
app.use(morgan('dev'))

// Connect to DB
mongoose.connect('mongodb://localhost:27017/bountiesdb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to the DB")
)

app.use('/bounties', bountyHunterRouter)

app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})