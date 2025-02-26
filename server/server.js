//* ENTRY POINT for the backend

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());

// This lets Express handle JSON requests
app.use(express.json());

// app.use('/rsvp', require('./routes/rsvpRoutes'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
