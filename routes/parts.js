const express = require('express');
const { pool } = require('../config');
const { response } = require('express');
const router = express.Router();


const getParts = (request, response) => {
    //gets all verbs and their principal parts
    pool.query('SELECT * FROM principal_parts', (error, results) => {
        if (error) {
            throw(error)
        }
        response.status(200).json(results.rows)
    })
}

router.get('/', getParts);

module.exports = router;
