const express = require('express');
const router = require('./routes');


const app = express();



//middleware 
//rate-limiting, logger

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.all('/api/v1', router);


module.exports = app;