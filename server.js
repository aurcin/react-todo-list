const express = require('express');

const config = require('./config');
const { PORT, NODE_ENV, HOST } = config;
// require('dotenv').config();

const app = express();

// const PORT = process.env.PORT || 5000;

// CORS related issues handle
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome to express');
});

app.listen(PORT, HOST, () => {
  console.log(`App listening on http://${HOST}:${PORT} in ${NODE_ENV} mode`);
});
