const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {pool} = require('./config');
const { response } = require('express');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());

const getParts = (request, response) => {
    pool.query('SELECT * FROM principal_parts', (error, results) => {
        if (error) {
            throw(error)
        }
        response.status(200).json(results.rows)
    })
}

app
    .route('/parts')
    //GET endpoint
    .get(getParts);


//start server
app.listen(process.env.PORT || 3002, () => {
    console.log('Server listening')
})


