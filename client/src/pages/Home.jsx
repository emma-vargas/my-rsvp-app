//* main client page

import React, { useState } from 'react';
// need in order to direct user to another page (Confirmation or Decline)
import { useNavigate } from 'react-router-dom';

// TODO where user clicks RSVP or Decline to store
// TODO user is to be redirected to Confirmation Page3 OR Decline Page4

function Home() {
  // Using usestate to store the user’s response
  // this gives us a piece of state (guestName) and a function (setGuestName) to update data in state
  const [guestName, setGuestName] = useState(''); // guesName stores name typed

  //
  const [headCount, setHeadCount] = useState(''); // stores number of ppl attending

  // function that redirects user to Confirmation or Decline page
  const navigate = useNavigate();

  // function sends the user's response to the server when they click the button (RSVP)
  // create a guest record in mongoose w/ fetch post req
  const rsvpHandleButtonClick = async () => {
    try {
      // how client sends req to server
      // fetch(arg1: server url, arg2: object (req options))
      // fetch sends a post req to the server at the route ('/rsvp/Guest') = arg1 | req to create a guest
      // arg2: specifying that its a post req, data is being sent (not just read) and we're including a header (tells the server to expect data in json format)
      const response = await fetch('/rsvp/Guest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // stringify takes an obj or arr and turns it into a str to send to server
        // data being sent to server:
        body: JSON.stringify({
          name: guestName, // name user typed
          headcount: headCount, // number of guests typed
          rsvpStatus: 'Accepted', // status is set to 'Accepted'
        }),
      });
      // if request is successful, redirect user to Confirmation.jsx
      if (response.ok) {
        navigate('/confirmation');
      } else {
        // otherwise log error
        console.error('Failed to submit RSVP');
      }
    } catch (error) {
      // if something goes wrong in try block, error is logged
      console.error('Error:', error);
    }
  };

  // function sends the user's response to the server when they click the button (Decline)
  // create a guest record in mongoose w/ fetch post req
  const declineHandleButtonClick = async () => {
    try {
      const response = await fetch('/rsvp/Guest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // stringify takes an obj or arr and turns it into a str to send to server
        // data being sent to server:
        body: JSON.stringify({
          name: guestName, // name user typed
          headcount: 0, // bc they declined, they are bringing 0 guests
          rsvpStatus: 'Declined', // status is set to 'Decline
        }),
      });
      // if request is successful, redirect user to Decline.jsx
      if (response.ok) {
        navigate('/decline');
      } else {
        console.error('Failed to submit RSVP');
      }
    } catch (error) {
      // if something does wrong, log error
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
          // bounds prop value to guestName (where it's coming from)
          value={guestName}
          // onChange handler calls setGuestName to update the state whenever the user types
          onChange={(e) => setGuestName(e.target.value)} // Update state as they type
          placeholder='Type your name here'
          className='text-input'
        />
      </div>
      <div>
        {/* The text box for user input */}
        <input
          type='text'
          // bounds prop value to headCount (where it's coming from)
          value={headCount}
          // onChange handler calls setGuestName to update the state whenever the user types
          onChange={(e) => setHeadCount(e.target.value)} // Update state as they type
          placeholder='Type headcount'
          className='text-input'
        />
        {/* The button users click after typing name */}
        {/* onClick handler calls rsvpHandleButtonClick  OR DeclineHandleButtonClick*/}
        {/* send data to db when a button is clicked */}
        <button onClick={rsvpHandleButtonClick}>RSVP</button>
        <button onClick={declineHandleButtonClick}>Decline</button>
      </div>
    </div>
  );
}
// export Home component so that it can be used in other files
export default Home;
