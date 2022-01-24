const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Issue
const issueSchema = new Schema({
    issue: {
        type: String,
        required: true,
    },
    upVote: {
        type: Number,
        required: false
    },
    downVote: {
        type: Number,
        required: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Issue", issueSchema)