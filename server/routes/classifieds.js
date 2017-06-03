'use strict'

const express = require('express')
const router = express.Router()
const knex = require('../../knex')
const pg = require('pg')

// YOUR CODE HERE
router.get('/', function(req, res, next) {
  knex('classifieds')
  .select('id', 'title', 'description', 'price', 'item_image')
  .then((classifieds) => {
    res.send(classifieds)
  })
})

router.get('/:id', (req, res, next) => {
  let id = req.params.id

  knex('classifieds')
  .where('id', id)
  .select('id', 'title', 'description', 'price', 'item_image')
  .then((message) => {
    res.send(message[0])
  })
})

router.post('/', (req, res, next) => {
  let newAdd = req.body

  knex('classifieds')
  .returning(['id', 'title', 'description', 'price', 'item_image'])
  .insert(newAdd)
  .then((newEntry) => {
    res.send(newEntry[0])
  })
})

router.patch('/:id', (req, res, next) => {
  let update = req.body
  console.log('req.body= ', update);
  let id = req.params.id

  knex('classifieds')
  .where('id', id)
  .returning(['id', 'title', 'description', 'price', 'item_image'])
  .update(update)
  .then((newInfo) => {
    res.send(newInfo[0])
  })
})

router.delete('/:id', (req, res, next) => {
  let id = req.params.id
console.log('reqparams= ', req.params.id);
  knex('classifieds')
  .where('id', id)
  .returning(['id', 'title', 'description', 'price', 'item_image'])
  .del()
  .then((data) => {
    res.send(data[0])
  })
})
module.exports = router
