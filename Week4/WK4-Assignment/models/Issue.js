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
        default: 0,
        required: false
    },
    downVote: {
        type: Number,
        default: 0,
        required: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Issue", issueSchema)