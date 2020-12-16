const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {pool} = require('./config');
const { response } = require('express');

const partsRouter = require('./routes/parts');
const setsRouter = require('./routes/sets')
const vocabRouter = require('./routes/vocab');
const folderRouter = require('./routes/folders');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());



app.use('/parts', partsRouter);
app.use('/folders', folderRouter);
app.use('/sets', setsRouter);
app.use('/vocab', vocabRouter);


//start server
app.listen(process.env.PORT || 3002, () => {
    console.log('Server listening')
})
