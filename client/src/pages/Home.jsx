//* main client page

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// TODO where user clicks RSVP or Decline to store

function Home() {
  // Using usestate to store the user’s response
  // this gives us a piece of state (guestName) and a function (setGuestName) to update state
  const [guestName, setGuestName] = useState('');

  //
  const [headCount, setHeadCount] = useState('');

  //
  const navigate = useNavigate();

  // Handle what happens when the user clicks the button (RSVP)
  // create a guest record in mongoose w/ fetch post req
  const rsvpHandleButtonClick = async () => {
    try {
      // fetch(arg1: server url, arg2: object (req options))
      // how client sends req to server, req will be sent to the 1st arg (url: server route to create a guest - see route in rsvp.Routes.js), 2nd arg (specifying that its a post req, and we're including a header and telling server to expect it in json)
      const response = await fetch('/rsvp/Guest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // stringify takes an obj or arr snd turns it into a str
        body: JSON.stringify({
          name: guestName,
          headcount: headCount,
          rsvpStatus: 'Accepted',
        }),
      });
      // redirect to Confirmation.jsx
      if (response.ok) {
        navigate('/confirmation'); // Redirect user to confirmation page
      } else {
        console.error('Failed to submit RSVP');
      }
    } catch (error) {
      //
      console.error('Error:', error);
    }
  };

  // Handle what happens when the user clicks the button (Decline)
  // will create a guest record in mongoose
  const declineHandleButtonClick = async () => {
    try {
      const response = await fetch('/rsvp/Guest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // stringify takes an obj or arr snd turns it into a str
        body: JSON.stringify({
          name: guestName,
          headcount: 0,
          rsvpStatus: 'Declined',
        }),
      });
      // redirect to Decline.jsx
      if (response.ok) {
        navigate('/decline'); // Redirect user to decline page
      } else {
        console.error('Failed to submit RSVP');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // everything in here gets rendered to the browser
  return (
    <div>
      <h1>Welcome to Nikolas' Party Invite! 🥳</h1>
      <h2>Date: May 2nd | Time: 2pm | Location: 123 Happy St.</h2>
      <p> Let us know if you'll be joining us! </p>
      <div>
        {/* The text box for user input */}
        <input
          type='text'
          // bound prop value to guestName
          value={guestName}
          // onChange handler calls setGuestName to update the state whenever the user types
          onChange={(e) => setGuestName(e.target.value)} // Update state as they type
          placeholder='Type your name here...'
        />
      </div>
      <div>
        {/* The text box for user input */}
        <input
          type='text'
          // bound prop value to headCount
          value={headCount}
          // onChange handler calls setGuestName to update the state whenever the user types
          onChange={(e) => setHeadCount(e.target.value)} // Update state as they type
          placeholder='Type headcount...'
        />
        {/* The button users click after typing */}
        {/* onClick handler calls rsvpHandleButtonClick  OR DeclineHandleButtonClick*/}
        {/* send data to db when a button is clicked */}
        <button onClick={rsvpHandleButtonClick}>RSVP</button>
        <button onClick={declineHandleButtonClick}>Decline</button>
      </div>
    </div>
  );
}

// TODO user is to be redirected to Confirmation Page3 OR Decline Page4

export default Home;
