//* This handles RSVP Submissions (backend route) from the frontend (Home.jsx)
// receives data from frontend, sends it to controller, stores guest info in mongoDB, sends response back to frontend

// framework allows for handling http requests
import express from 'express';
// Create a router to handle requests
const router = express.Router();
// must import controller file to use as middleware
// allows for separation of routing (router file) from business loic (controller file)
import rsvpController from './rsvpController.js';

// route will create a guest record in db, send a post req to store guest data
// rsvpController.Guest: this middleware function is getting guest data through the req & saves it to wherever Guest defines (mongoDB)
router.post('/Guest', rsvpController.Guest, (req, res) => {
  console.log('Hi from the server!');
  // response is sent back to the frontend, we're just sending back an empty obj (fix)
  res.status(200).json({});
});

// export the router so that it can be used in server.js (server.js will import router and use it to handle rsvp requests)
export default router;

//TODO
// maybe send a response message back ?
// what if user does not type in name? or invalid input?
// confirm data is saved correctly?
