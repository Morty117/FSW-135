const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Issue
const issueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    issue: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: false
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