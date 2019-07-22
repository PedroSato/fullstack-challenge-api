const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();

const server = require('http').Server(app);

const bodyParser = require('body-parser');

mongoose.connect('mongodb+srv://USUARIO:fullstackchallenge@cluster0-ay30j.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

app.use((req, res, next) => {
    next()
})

app.use(cors())
app.use(bodyParser.json());
app.use(require('./routes'))
server.listen('3333')