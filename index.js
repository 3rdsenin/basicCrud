const express = require('express');

const port = 3009;

const app = express();



//middleware 
//rate-limiting, logger

app.use(express.json());
app.use(express.urlencoded({ extended: true }))


module.exports = app;