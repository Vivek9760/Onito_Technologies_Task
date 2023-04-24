require('dotenv').config();
require('./DataBase/Connection');
const cors = require('cors')
const express = require('express');
const app = express();

const getData = require('./Routes/getData');
const postData = require('./Routes/postData');

app.use(express.json());
app.use(cors());

app.use('/users/',getData);
app.use('/users/',postData);

app.listen(5000)

