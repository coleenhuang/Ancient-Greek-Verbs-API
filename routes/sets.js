const express = require('express')
const { pool } = require('../config')
const { response } = require('express');
const router = express.Router();


const getSets = (request, response) => {
  pool.query('SELECT * FROM vocab_sets', (error, results) => {
    if (error){
      throw(error)
    }
    response.status(200).json(results.rows)
  })
}

const getSetVocab = (request, response) => {
  //gets vocab within a specific set
  const setId = request.params.set_id;

  pool.query('SELECT * FROM vocab WHERE set_id = $1', [setId], (error, results) => {
    if (error) {
      throw(error)
    }
    response.status(200).json(results.rows)
  })
}


const createSet = (request, response) => {
  //creates a new set
  const { set, folder } = request.body
  pool.query('INSERT INTO vocab_sets(set_name, folder_id) VALUES ($1, $2)', [set, folder], (error, result) => {
      if (error) {
        throw error
      }
      response.status(201).send(`set added`)
    })
}


router.get('/', getSets);
router.get('/:set_id', getSetVocab)
router.post('/', createSet);


module.exports = router;
