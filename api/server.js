const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const dbConfig = require('./DB.js');
const postRoute = require('./post.route');

// Connect to database to persist simulated ECC-LCM-ESP32 module data
mongoose.Promise = global.Promise;
mongoose.connect(
  dbConfig.DB + dbConfig.database,
  { useNewUrlParser: true }
).then(
  () => { console.log('Connected to database!') },
  err => { console.log('Unable to connect to the database: ' + err) }
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', postRoute);

app.listen(PORT, function () {
  console.log('Server is running on Port:', PORT);
});