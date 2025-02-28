//* Decline page after user clicked Decline

import React from 'react';
// allows for user to be redirect to another page (back to homepage)
import { useNavigate } from 'react-router-dom';

function Decline() {
  // allows for user to be redirect to another page (back to homepage)
  const navigate = useNavigate();

  return (
    <div>
      <h1>We are sorry to miss you!</h1>
      <img src='https://www.yourtango.com/sites/default/files/2016%20Oct/shameintro.gif' />
      <p>JK! Nikolas will see you another time!</p>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
}

// export Decline component so that it can be used in other files
export default Decline;
