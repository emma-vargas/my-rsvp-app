//* This handles RSVP Submissions (backend route)

import express from 'express';
// Create a router to handle requests
const router = express.Router();
import rsvpController from './rsvpController.js';

// route will create a guest record in db, send a post req to store guest data
router.post('/Guest', rsvpController.Guest, (req, res) => {
  console.log('Hi from the server!');
  // in json file (res.locals._______)
  res.status(200).json({});
});

//

// POST: save rsvp response (guest record)

export default router;
