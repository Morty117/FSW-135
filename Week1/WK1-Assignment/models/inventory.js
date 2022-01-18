const mongoose = require('mongoose')
const Schema = mongoose.Schema

// bounty Schema
const Inventory = Schema({
    item: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("Inventory", Inventory)