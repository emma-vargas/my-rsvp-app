//* ENTRY POINT for the backend
// REQUIRED MODULES:
// framework needed for building web servers
import express from 'express';
// allows interaction w/ mongoDB
import mongoose from 'mongoose';
// allows the frontend (react) to communicate w/ the backend (Express)
import cors from 'cors';
// imports api routes for handling rsvp requests
import router from './routes/rsvpRoutes.js';
// allows for the use of environment variables (ex: )
import dotenv from 'dotenv';
// loads variables from .env (Is this needed??)
dotenv.config();

// this creates our express app that will handle http requests
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
// allows the frontend (React) to make api requests to the backend (Express)
app.use(cors());

// lets Express handle/parse JSON requests
// needed for Express to read data coming from the frontend(React)
app.use(express.json());

// lets requests to rsvp be handle by the router in rsvpRoutes
app.use('/rsvp', router);

// starts the express server & listens for requests
// cb function logs the string message
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
