const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require("./databases/dbConnection.js");
const routes = require('./src/routes.js');

dotenv.config({ path: '.env' });

const app = express();

app.use(express.json());

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

app.use(express.json());

app.use(routes);

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
