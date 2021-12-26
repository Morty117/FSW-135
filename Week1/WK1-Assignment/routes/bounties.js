const express = require('express')
const bountyHunterRouter = express.Router()
const { v4: uuidv4} = require('uuid')

let bounties = [
    {first: 'Obi-Wan', last: 'Kenobi', living: false, bountyAmount: 1000, type: 'jedi', _id: uuidv4()},
    {first: 'Sheev', last: 'Palpatine', living: false, bountyAmount: 0, type: 'sith', _id: uuidv4()},
    {first: 'Anakin', last: 'Skywalker', living: false, bountyAmount: 0, type: 'sith', _id: uuidv4()},
    {first: 'Ahsoka', last: 'Tano', living: true, bountyAmount: 6000, type: 'jedi', _id: uuidv4()}
]

bountyHunterRouter
    .get('/', (req, res) => {

        console.log('inside router')

        res.send(bounties)
    })

    .get('/:bountyId', (req, res) => {
        const bountyId = req.params.bountyId
        const singleBounty = bounties.find(bounty => bounty._id === bountyId)

        res.send(singleBounty)
    })
    .get('/search/first', (req,res) => {
        const bountyId = req.query.first
        const filterBounty = bounties.filter(bounty => bounty.first === bountyId)

        res.send(filterBounty)
    })
    .get('/search/last', (req,res) => {
        const bountyId = req.query.last
        const filterBounty = bounties.filter(bounty => bounty.last === bountyId)

        res.send(filterBounty)
    })
    .get('/search/type', (req,res) => {
        const bountyId = req.query.type
        const filterBounty = bounties.filter(bounty => bounty.type === bountyId)

        res.send(filterBounty)
    })

    .post('/', (req, res) => {
        const newbounty = req.body
        newbounty._id = uuidv4()
        bounties.push(newbounty)

        console.log(bounties)
        res.send(newbounty)
    })

    .delete('/:bountyId', (req, res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        bounties.splice(bountyIndex, 1)

        res.send('Bounty completed')
    })

    .put('/:bountyId', (req, res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        Object.assign(bounties[bountyIndex], req.body)

        res.send(req.body)
    })

module.exports = bountyHunterRouter