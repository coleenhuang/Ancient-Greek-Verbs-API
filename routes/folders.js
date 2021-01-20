const express = require('express');
const { pool } = require('../config');
const { response } = require('express');
const router = express.Router();


const getFolders = (request, response) => {
    //gets all folders
    pool.query('SELECT * FROM folders', (error, results) => {
        if (error) {
            throw(error)
        }
        response.status(200).json(results.rows)
    })
}

const getFolderSets = (request, response) => {
  //gets all sets within a folder
  const folderId = request.params.folder_id
  pool.query('SELECT * FROM vocab_sets WHERE folder_id = $1', [folderId], (error, results) => {
      if (error) {
          throw(error)
      }
      response.status(200).json(results.rows)
  })
}

const createFolder = (request, response) => {
    //creates a new folder
    const { folder } = request.body
    pool.query('INSERT INTO folders (folder_name) VALUES ($1)', [folder], (error, result) => {
        if (error) {
          throw error
        }
        response.status(201).send(`folder added`)
      })
}



router.get('/', getFolders);
router.get('/:folder_id', getFolderSets)
router.post('/', createFolder)
module.exports = router;
