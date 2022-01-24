const express = require('express')
const commentRouter = express.Router()
const Comment = require('../models/Comment')

// Get all
commentRouter
    .get('/', (req, res, next) => {
        const comment = req.query
        Comment.find((err, comments) => {
            if (err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(comments)
        })
    })

// Get one
    .get('/:commentId', (req, res, next) => {
        const commentId = req.params.commentId
        Comment.findOne({_id: commentId}, (err, comment) => {
            if (err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(comment)
        })
    })

// Post
    .post('/', (req, res, next) => {
        const newComment = new Comment(req.body)
        newComment.save((err, savedComment) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedComment)
        })
    })

// Put
    .put('/:commentId', (req, res, next) => {
        const commentId = req.params.commentId
        const updateComment = req.body
        Comment.findOneAndUpdate({_id: commentId}, updateComment,
            (err, updatedComment) => {
                if(err){
                    res.status(500)
                    return next(err)
                  }
                  return res.status(201).send(updatedComment)   
            })
    })

// Delete
    .delete('/:commentId', (req, res, next) => {
        const commentId = req.params.commentId
        Comment.findOneAndDelete({_id: commentId}, (err, deletedComment) => {
            if(err){
                res.status(500)
                return next(err)
              }
              return res.status(201).send(deletedComment)
        })
    })

module.exports = commentRouter