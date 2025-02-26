//* Home Component (initial landing page)

import { useState } from 'react';

function Home() {
  // Use state to store the user’s input
  // this gives us a piece of state (guestName) and a function (setGuestName) to update it
  const [guestName, setGuestName] = useState('');

  // Handle what happens when the user clicks the button
  const handleButtonClick = () => {
    // right's now its an alert (pop up) --> we want to redirect the user to Page 2
    alert(`Getting your name ${guestName}!`);
  };

  // everything in here gets rendered to the browser
  return (
    <div>
      <h1>Welcome to Nikolas' Party Invite! 🥳</h1>
      <h2>Date: May 2nd | Time: 2pm | Location: 123 Happy St.</h2>
      <p> Let us know if you'll be joining us! </p>
      {/* The text box for user input */}
      <input
        type='text'
        // bound prop value to guestName
        value={guestName}
        // onChange handler calls setGuestName to update the state whenever the user types
        onChange={(e) => setGuestName(e.target.value)} // Update state as they type
        placeholder='Type your name here...'
      />

      {/* The button users click after typing */}
      {/* onClick handler calls handleButtonClick */}
      {/* send data to db when button is clicked */}
      <button onClick={handleButtonClick}>Search</button>
    </div>
  );
}

export default Home;
