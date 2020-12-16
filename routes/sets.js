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

//Add another route where you get the vocab by set id

router.get('/', getSets);


module.exports = router;