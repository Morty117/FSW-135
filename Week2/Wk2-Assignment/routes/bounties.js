const express = require('express')
const bountyHunterRouter = express.Router()
const Bounty = require('../models/bounty') 

bountyHunterRouter
    .get('/', (req, res, next) => {

        console.log('inside router')

        console.log('Bounty: ', Bounty)

        Bounty.find((err, bounties) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(bounties)
        })
    })

    .post('/', (req, res, next) => {
        const newBounty = new Bounty(req.body)

        newBounty.save((err, savedBounty) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(savedBounty)
        })


    })
    
    .delete('/:bountyId', (req, res) => {
        Bounty.findOneAndDelete({_id: req.params.bountyId}, (err, deletedBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deletedBounty.first} ${deletedBounty.last} from bounty list`)
        })
    })

    .put('/:bountyId', (req, res) => {
        Bounty.findOneAndUpdate(
            {_id: req.params.bountyId},
            req.body,
            { new: true },
            (err, updatedBounty) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedBounty)
            }
        )
    })

module.exports = bountyHunterRouter