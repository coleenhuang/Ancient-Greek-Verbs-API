const express = require('express')
const { pool } = require('../config')
const { response } = require('express');
const router = express.Router();


const getSets = (request, response) => {
  pool.query('SELECT * FROM vocab_sets', (error, results) => {
    if (error){
      throw(error)
    }
    response.status(200).json(results.row)
  })
}

router.get('/sets', getSets);

module.exports = router;
