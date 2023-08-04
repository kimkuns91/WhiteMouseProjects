// @ts-check

const express = require('express')
const cors = require("cors");
const path = require('path');

const app = express()

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const mainRouter = require('./routes/index')

app.use(express.static(path.join(__dirname, '/build')));

app.get('/', (req, res) => {

});

app.use('/api', mainRouter)

// @ts-ignore
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    res.statusCode = err.statusCode || 500
    res.send(err.message)
})
app.get('*', (req, res) => {

});

module.exports = app