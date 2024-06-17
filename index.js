import express from 'express';
import { port } from './config.env.js';
import dotenv from 'dotenv'
import connectDB from "./databases/dbConnection.js";
import cors from 'cors';
import routes from './src/routes.js';

dotenv.config();

const app = express();
app.use(express.json());

const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  methods: process.env.CORS_METHODS.split(','), 
  allowedHeaders: process.env.CORS_ALLOWED_HEADERS.split(','), 
  credentials: process.env.CORS_CREDENTIALS === 'true'
}));  
connectDB();
app.use(routes);
