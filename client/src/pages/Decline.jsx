//* Decline page after user clicked Decline

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Confirmation() {
  //
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

export default Confirmation;
