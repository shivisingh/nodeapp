'use strict'

const express = require('express');

//Constants
const PORT = 8080;
const HOST = '0.0.0.0';

//App
const app = express();
app.get('/', (req, res)=> {
    res.send('Did my first hello world on Doker and may be Kubernetes.. Let us see :-)')
});

app.listen(PORT, HOST);
console.log('Running on http://localhost:8080');