const express = require('express')
const { pool } = require('../config')
const { response } = require('express');
const router = express.Router();

const getVocab = (request, response) => {
  pool.query('SELECT * FROM vocab', (error, results) => {
    if(error){
      throw(error)
    }
    response.status(200).json(results.rows)
  })
}

const getSets = (request, response) => {
  pool.query('SELECT * FROM vocab_sets', (error, results) => {
    if (error){
      throw(error)
    }
    response.status(200).json(results.rows)
  })
}

router.get('/', getVocab);
router.get('/sets', getSets);

module.exports = router;
