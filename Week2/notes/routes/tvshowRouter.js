const express = require('express')
const tvshowRouter = express.Router()
const TVshow = require('../models/tvshows.js')

// work with errors first

tvshowRouter
    .get('/', (req, res, next) => {
        TVshow.find((err, shows) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(shows)
        })
    })

    .post('/', (req, res, next) => {
        console.log(req.body)
        const newShow = new TVshow(req.body)
        console.log(newShow)
        newShow.save((err, saveShow) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(saveShow)
        })
    })

    .delete('/:tvId', (req, res, next) => {
        TVshow.findOneAndDelete({_id: req.params.tvId}, (err, deletedShow) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deletedShow.title} from the database`)
        })
    })

    .put('/:tvId', (req, res, next) => {
        TVshow.findOneAndUpdate(
            {_id: req.params.tvId},
            req.body,
            { new: true },
            (err, updatedShow) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedShow)
            }
        )
    })

    // for the PUT it has 4 methods
    // 1. Which page to update
    // 2. What data to update
    // 3. Which version to return
    // 4. callback function
    
module.exports = tvshowRouter