const express = require('express')
const Issue = require('../models/Issue')
const issueRouter = express.Router()

// Get all
issueRouter
    .get('/', (req, res, next) => {
        const issue = req.query
        Issue.find((err, issues) => {
            if (err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(issues)
        })
    })

// Get one
    .get('/:issueId', (req, res, next) => {
        const issueId = req.params.issueId
        Issue.findOne({_id: issueId}, (err, issues) => {
            if (err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(issues)
        })
    })

// Post
    .post('/', (req, res, next) => {
        console.log(req.body)
        req.body.user = req.user._id
        console.log(req.user, req.body)
        const newIssue = new Issue(req.body)
        newIssue.save((err, savedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedIssue)
        })
    })

// Put
    .put('/:issueId', (req, res, next) => {
        const issueId = req.params.issueId
        const updateIssue = req.body
        Issue.findOneAndUpdate({_id: issueId}, updateIssue,
            (err, updatedIssue) => {
                if(err){
                    res.status(500)
                    return next(err)
                  }
                  return res.status(201).send(updatedIssue)   
            })
    })

// Put for votes
    // .put('/downvote/:issueId', (req, res, next) => {
    //     Issue.findOneAndUpdate(
    //         {_id: req.params.issueId},
    //         {
    //             $inc: {
    //                 downVote: -1,
    //             }
    //         },
    //         { new: true},
    //         (err, updatedIssue) => {
    //             if(err){
    //                 res.status(500)
    //                 return next(err)
    //               }
    //               return res.status(201).send(updatedIssue)   
    //         }
    //     )
    // })
    // .put('/upvote/:issueId', (req, res, next) => {
    //     Issue.findOneAndUpdate(
    //         {_id: req.params.issueId},
    //         {
    //             $inc: {
    //                 upVote: 1,
    //             }
    //         },
    //         { new: true},
    //         (err, updatedIssue) => {
    //             if(err){
    //                 res.status(500)
    //                 return next(err)
    //               }
    //               return res.status(201).send(updatedIssue)   
    //         }
    //     )
    // })

// Delete
    .delete('/:issueId', (req, res, next) => {
        const issueId = req.params.issueId
        Issue.findOneAndDelete({_id: issueId}, (err, deletedIssue) => {
            if(err){
                res.status(500)
                return next(err)
              }
              return res.status(201).send(deletedIssue)
        })
    })

module.exports = issueRouter