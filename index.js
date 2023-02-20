const express = require('express');
const router = require('./routes');
require('./middleware/auth.middleware');

const app = express();



//middleware 
//rate-limiting, logger

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/api/v1', router);


module.exports = app;