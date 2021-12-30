const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

//Middleware (for every request)
app.use(express.json())
app.use(morgan('dev'))

// Connect to DB
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/tvshowsdb');
    console.log("Connected to the DB")
}

// the protocol is the connection that will be use, mongodb (HTTP, FTP, TCP/IP, SMTP, DHCP, IMAP4)
// the second component identifies the server, localhost. You will also need to provide a username and password
// the 3rd component identifies the endpoint or PORT #
// the final part knows the database you are querying 
// the second argument [options] is an object {}, it defines a set of configurations that your data transaction will be formatted and used
// the third argument [callback] defined a callback function to let us know our connection string worked 
// mongoose.connect('mongodb://localhost:27017/tvshowsdb', [options], [callback]), () => console.log("Connected to the DB")

// Routes
app.use('/tv-shows', require('./routes/tvshowRouter'))


app.listen(3000, () => {
    console.log("The app is listening on port 3000")
})