const mongoose = require('mongoose')
const Schema = mongoose.Schema

// tv-shows schema
const tvShowSchema = newSchema({
    title: {
        type: String,
        required: true
    },
    channel: {
        type: String,
        required: true
    },
    release_year: {
        type: String,
        required: true,
        min: 2010
    }
})

module.exports = mongoose.model("TV-shows", tvShowSchema)