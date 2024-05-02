const express = require('express');
const app = express();
const port = process.env.PORT || 5001;
require('dotenv').config();
const dbConfig = require('./config/dbConfig'); 

app.listen(port, () => console.log(`Node JS Server Started at ${port}`));

 