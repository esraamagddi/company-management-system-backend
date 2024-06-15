const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require("./databases/dbConnection.js")

dotenv.config({ path: '.env' });

const app = express();

app.use(express.json());

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

process.on('uncaughtException', (exception) => {
  console.log('Uncaught exception occurred:\n', exception);
  process.exit(1);
});

process.on('unhandledRejection', (exception) => {
  console.log('unhandled Rejection occurred:\n', exception);
  process.exit(1);
});

connectDB();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:3000`);
});



function shutdown() {
  server.close((err) => {
    if (err) {
      console.error('Error closing server:', err);
      process.exit(1);
    }
    console.log('Server closed gracefully');
    process.exit(0);
  });
}


process.on('SIGINT', () => {
  console.log('Received SIGINT signal. Closing server gracefully...');
  shutdown();
});

process.on('SIGTERM', () => {
  console.log('Received SIGTERM signal. Closing server gracefully...');
  shutdown();
});