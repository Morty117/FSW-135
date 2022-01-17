const express = require('express')
const userRouter = express.Router()
const User = require('../models/User')

// Get all
userRouter
    .get('/', (req, res, next) => {
        const user = req.query
        User.find((err, users) => {
            if (err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(users)
        })
    })

// Get one
    .get('/:userId', (req, res, next) => {
        const userId = req.params.userId
        User.findOne({_id: userId}, (err, user) => {
            if (err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(user)
        })
    })

// Post
    .post('/', (req, res, next) => {
        const newUser = new User(req.body)
        newUser.save((err, savedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedUser)
        })
    })

// Put
    .put('/:userId', (req, res, next) => {
        const userId = req.params.userId
        const updateUser = req.body
        User.findOneAndUpdate({_id: userId}, updateUser, 
            (err, updatedUser) => {
                if(err){
                    res.status(500)
                    return next(err)
                  }
                  return res.status(201).send(updatedUser)
            })
    })

// Delete
    .delete('/:userId', (req, res, next) => {
        const userId = req.params.userId
        User.findOneAndDelete({_id: userId}, (err, deleteUser) => {
            if(err){
                res.status(500)
                return next(err)
              }
              return res.status(201).send(deleteUser)
        })
    })

module.exports = userRouter