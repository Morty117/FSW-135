const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Issue
const issueSchema = new Schema({
    issue: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("Issue", issueSchema)