const express = require('express');
const { pool } = require('../config');
const { response } = require('express');
const router = express.Router();


const getFolders = (request, response) => {
    //gets all verbs and their principal parts
    pool.query('SELECT * FROM folders', (error, results) => {
        if (error) {
            throw(error)
        }
        response.status(200).json(results.rows)
    })
}

router.get('/', getFolders);

module.exports = router;