
require('dotenv').config();
const cors = require('cors');

const express = require('express'); // import express
const app = express(); // instance express
const port = process.env.PORT;

// connect to DB
require('./config/mongoose.config.js');

// middleware
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// route module instance
require('./router/player.route')(app);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});