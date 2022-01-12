const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

// Middleware (for every request) //
app.use(express.json()) 
app.use(morgan('dev')) 

// Connect to DB
main().catch(err => console.log(err))
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/db-methods')
    console.log('connected to the DB')
}

// Routes //
app.use('/books', require('./routes/bookRouter.js'))
app.use('/authors', require('./routes/authorRouter.js'))

// Error handler
app.use((err, req, res, next) => {
  console.log(err)
  return res.send({errMsg: err.message})
})

// Server Listen //
app.listen(9000, () => {
  console.log('The server is running on Port 9000')
})