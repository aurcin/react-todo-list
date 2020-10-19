const express = require('express');

const config = require('./config/config');
const errorHandler = require('./middleware/error');
const todoRoutes = require('./routes/todo');
const connectDB = require('./config/db');

const { PORT, NODE_ENV, HOST } = config;
const app = express();
connectDB();

// body parsing
app.use(express.json());

// CORS related issues handle
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use('/api/v1/todo', todoRoutes);

app.use(errorHandler);

const server = app.listen(PORT, HOST, () => {
  console.log(`App listening on http://${HOST}:${PORT} in ${NODE_ENV} mode`);
});

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
