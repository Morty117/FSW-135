const mongoose = require('mongoose')
const Schema = mongoose.Schema

// bounty Schema
const bountySchema = Schema({
    first: {
        type: String,
        required: true
    },
    last: {
        type: String,
        required: true
    },
    living: {
        type: Boolean,
        required: true
    },
    bountyAmount: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("Bounty", bountySchema)