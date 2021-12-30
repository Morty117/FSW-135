const mongoose = require('mongoose')
const Schema = mongoose.Schema

// tv-shows schema
const tvShowSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    channel: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true,
        min: 2000
    }
})

module.exports = mongoose.model("TV-shows", tvShowSchema)