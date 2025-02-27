//* Confirmation page after user clicked RSVP

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Confirmation() {
  //
  const navigate = useNavigate();

  // TODO (stretch goal) - Place WishList link (button)

  // Handle what happens when the user clicks the button (WishlistLink)
  const wishlistHandleButtonClick = () => {
    // user will be redirected to an amazon wishlist
    const amazonLink =
      'https://www.amazon.com/registries/gl/guest-view/ALH3KFNPEEN1';
  };

  // TODO (stretch goal) - Place Add Event to Calendar (button)
  // Handle what happens when the user clicks the button (calendar)
  const calendarHandleButtonClick = () => {
    // user will be redirected to their calendar with the event added for them
  };

  return (
    <div>
      <h1>RSVP Confirmed! 🎉</h1>
      <p>Thank you for your response! We look forward to seeing you.</p>
      <button onClick={() => navigate('/')}>Back to Home</button>
      {/* onClick handler calls wishlistHandleButtonClick  OR calendarHandleButtonClick*/}
      {/* send data to db when a button is clicked */}
      <button onClick={wishlistHandleButtonClick}>Wishlist Link</button>
      <button onClick={calendarHandleButtonClick}>
        Add Event to Apple or Google Calendar
      </button>
    </div>
  );
}

export default Confirmation;
