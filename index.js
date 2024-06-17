import express from 'express';
import { port } from './config.env.js';
import dotenv from 'dotenv'
import connectDB from "./databases/dbConnection.js";

dotenv.config();

const app = express();

const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  
connectDB();  