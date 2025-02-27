//* ENTRY POINT for the backend

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/rsvpRoutes.js';
import path from 'path';
// require('dotenv').config();
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());

// This lets Express handle JSON requests
app.use(express.json());

app.use('/rsvp', router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
