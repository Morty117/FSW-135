const express = require('express')
const inventoryRouter = express.Router()
const inventory = require('../models/inventory')


inventoryRouter
    .get('/', (req, res, next) => {
        inventory.find((err, items) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(items)
        })
    })

    .post('/', (req, res, next) => {
        const newItem = new inventory(req.body)

        newItem.save((err, savedItem) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(savedItem)
        })


    })

    .delete('/:inventoryId', (req, res) => {
        const inventoryId = req.params.inventoryId
        inventory.findOneAndDelete({_id: inventoryId}, (err, deletedItem) => {
            if(err){
                res.status(500)
                return next(err)
              }
              return res.status(201).send(deletedItem)
        })
    })

    .put('/:inventoryId', (req, res) => {
        const inventoryId = req.params.inventoryId
        const updateInventory = req.body
        inventory.findOneAndUpdate({_id: inventoryId}, updateInventory,
            (err, updatedItem) => {
                if(err){
                    res.status(500)
                    return next(err)
                  }
                  return res.status(201).send(updatedItem)   
            })
    })

module.exports = inventoryRouter