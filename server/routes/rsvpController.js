//* This will hold my middleare from my route

import express from 'express';
import Guests from '../models/RSVP.js';

const rsvpController = {};

rsvpController.Guest = async (req, res, next) => {
  // properties that a Gyest should have
  const { name, headcount, rsvpStatus } = req.body;

  console.log('req.body: ⭐️', req.body);

  try {
    // setting newGuest to creating a new guest with the properties: name, headcount and rsvpStatus
    const newGuest = await Guests.create({ name, headcount, rsvpStatus });
    // making newGuest variable avialble to use elsewhere
    res.locals.newGuest = newGuest;
    return next();
  } catch (error) {
    // sending a 500 status and error as a json response
    console.log('error: ⭐️', error);
    res.status(500).json({ error: error });
  }
};

export default rsvpController;
